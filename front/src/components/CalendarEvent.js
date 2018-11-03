import React, { Component } from 'react';
import api from '../lib/api-service';
import JoinButton from './JoinButton';
import MicrolinkCard from 'react-microlink';

class CalendarEvent extends Component {
	state = {
		id: this.props.info,
		displayName: 'loading',
		date: 'loading',
		venue: 'loading',
		location: 'loading',
		uri: '',
		data: []
	};
	componentDidMount() {
		const id = this.props.info;

		api.getEventDetails(id).then(({ data }) => {
			let eventData = data.resultsPage.results.event;
			console.log(eventData.uri);
			this.setState({
				id: eventData.id,
				displayName: eventData.displayName,
				date: eventData.start.date,
				venue: eventData.venue.displayName,
				location: eventData.location.city,
				data: data,
				uri: eventData.uri
			});
		});
	}
	render() {
		const id = this.props.info;
		{
			if (this.state.uri) {
				return (
					<div type="text/x-template" id="blog-card">
						<a className="card-link">
							<article class="blog-card">
								<MicrolinkCard url={`${this.state.uri}`} href={'/lobby/' + id} size="large" />

								<div className="article-details">
									<h4 className="post-category">{this.state.date}</h4>
									<a href={'/lobby/' + id}>
										{' '}
										<h2 className="post-title">{this.state.displayName}</h2>
									</a>

									<p className="post-description">{this.state.venue}</p>
									<JoinButton id={this.state.id}> JOIN</JoinButton>
									<p className="post-author"> {this.state.location}</p>
								</div>
							</article>
						</a>
					</div>
				);
			} else {
				return <p>loading</p>;
			}
		}
	}
}
export default CalendarEvent;
