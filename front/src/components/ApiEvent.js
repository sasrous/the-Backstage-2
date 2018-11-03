import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MicrolinkCard from 'react-microlink';

class ApiEvent extends Component {
	render() {
		const eventname = this.props.info.displayName;
		const date = this.props.info.start.date;
		const location = this.props.info.location.city;
		const venue = this.props.info.venue.displayName;
		const id = this.props.info.id;

		return (
			<div className="list-group">
				<Link
					to={`/lobby/${id}`}
					className="list-group-item list-group-item-action flex-column align-items-start"
				>
					<big className="text-muted">{date}</big>
					<div className="d-flex w-100 justify-content-between">
						<h4 className="mb-1">{eventname} </h4>
					</div>
					<h5 className="mb-1"> > {venue}</h5>
					<small className="text-muted">{location}</small>
				</Link>
				<MicrolinkCard url={`${this.props.info.uri}`} size="large" />
			</div>
		);
	}
}
export default ApiEvent;
