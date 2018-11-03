import React, { Component } from 'react';
import auth from '../lib/auth-service';

class JoinButton extends Component {
	state = {
		id: this.props.id.toString(),
		joined: false
	};
	checkEvent = (event) => {
		auth.check(event).then((data) => {
			if (data.length === 0) {
				this.setState({
					joined: false
				});
			} else {
				this.setState({
					joined: true
				});
			}
		});
	};

	unfollowEvent = (event) => {
		auth.delete(event).then((data) => {
			this.setState({
				joined: false
			});
		});
	};
	joinEvent = (event) => {
		auth.join(event);
		this.setState({
			joined: true
		});
	};

	componentDidMount = () => {
		this.checkEvent({ id: this.state.id });
	};

	render() {
		if (this.state.joined) {
			return (
				<button
					className="join-btn info"
					onClick={() => {
						this.unfollowEvent({ id: this.state.id });
					}}
				>
					Unfollow
				</button>
			);
		} else {
			return (
				<button
					className="join-btn info"
					onClick={() => {
						this.joinEvent({ id: this.state.id });
					}}
				>
					Join
				</button>
			);
		}
	}
}

export default JoinButton;
