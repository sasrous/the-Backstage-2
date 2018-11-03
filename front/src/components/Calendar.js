import React, { Component } from 'react';
import CalendarEvent from '../components/CalendarEvent';

class Calendar extends Component {
	state = {
		joined: true
	};

	render() {
		const { data } = this.props;
		return (
			<ul className="calendar-wrapper">
				<h3>Your Calendar</h3>
				{data.map((number, id) => <CalendarEvent info={[ number ]} key={id} />)}
			</ul>
		);
	}
}

export default Calendar;
