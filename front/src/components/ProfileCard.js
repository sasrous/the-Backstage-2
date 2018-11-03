import React, { Component } from 'react';
import auth from '../lib/auth-service';
import Calendar from './Calendar';

class ProfileCard extends Component {
	state = {
		user: {
			eventsJoined: [],
			profilePicure: 'http://profilepicturesdp.com/wp-content/uploads/2018/06/blank-user-profile-picture-1.gif'
		}
	};
	componentWillMount = () => {
		auth.getUser(this.props.match.params.id).then((data) => {
			this.setState({
				user: data
			});
		});
	};
	renderInfo = () => {
		return <Calendar data={this.state.user.eventsJoined} />;
	};
	render() {
		const user = this.state.user;

		return (
			<div>
				<div className="profileImage">
					<img alt="profile" src={user.profilePicture} />
				</div>
				<h1>{user.username}</h1>
				<h3>Name: {user.name}</h3>
				<h3>Age: {user.age}</h3>
				<h3>
					About {user.username}: {user.about}
				</h3>
				<h3>{user.username}'s Calendar:</h3>
				{user.eventsJoined.length > 0 ? this.renderInfo() : <div>No events in the Calendar</div>}
			</div>
		);
	}
}

export default ProfileCard;
