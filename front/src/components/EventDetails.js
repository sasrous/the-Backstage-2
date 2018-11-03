import React, { Component } from 'react';
import api from '../lib/api-service';
import JoinButton from './JoinButton';
import MicrolinkCard from 'react-microlink';

class EventDetails extends Component {
	componentDidMount() {
		const { id } = this.props;
		api
			.getEventDetails(id)
			.then((result) => {
				const data = result.data.resultsPage.results.event;
				this.setState({
					data: data
				});
			})
			.catch(() => {});
	}

	render() {
		if (this.state) {
			const { displayName, uri, location, start, venue } = this.state.data;
			return (
				<div>
					<MicrolinkCard url={`${uri}`} size="large" className="extralarge" />
					<h1>{displayName}</h1>
					<h2>{start.date}</h2>
					<h5>Venue : {venue.displayName}</h5>
					<h5>City: {location.city}</h5>
					<a href={uri}> More Info </a>
					<JoinButton id={this.props.id}>JOIN</JoinButton>
				</div>
			);
		} else {
			return (
				<div>
					<p>{this.props.id} LOADING </p>
				</div>
			);
		}
	}
}
export default EventDetails;
