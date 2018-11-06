import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MicrolinkCard from 'react-microlink';
import JoinButton from './JoinButton';
class ApiEvent extends Component {
	render() {
		const eventname = this.props.info.displayName;
		const date = this.props.info.start.date;
		const location = this.props.info.location.city;
		const venue = this.props.info.venue.displayName;
		const id = this.props.info.id;
		const uri = this.props.info.uri;
		console.log(uri);

		return (
			<div type="text/x-template" id="blog-card">
				<a className="card-link">
					<article class="blog-card">
						<MicrolinkCard
							apiKey="0RCIGKSrMD2uIMODno7Wk6H4SLixVZqW6oWAl0f6"
							url={uri}
							href={`/lobby/${id}`}
							size="large"
						/>

						<div className="article-details">
							<h4 className="post-category">{date}</h4>
							<a href={`/lobby/${id}`}>
								{' '}
								<h2 className="post-title">{eventname}</h2>
							</a>

							<p className="post-description">{venue}</p>
							<JoinButton id={id}> JOIN</JoinButton>
							<p className="post-author"> {location}</p>
						</div>
					</article>
				</a>
			</div>
		);
	}
}
export default ApiEvent;
