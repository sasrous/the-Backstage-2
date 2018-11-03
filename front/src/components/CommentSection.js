import React, { Component } from 'react';
import CommentList from './CommentList';
import InputComment from './InputComment';
import EventApi from '../lib/event-service';
import { add } from 'gl-matrix/src/gl-matrix/mat2d';

class CommentSection extends Component {
	state = {
		comments: false,
		user: this.props.user,
		event: this.props.event,
		eventcomments: []
	};
	getComments = () => {
		EventApi.getEvent(this.state.event).then((data) => {
			this.setState({
				eventcomments: data.data[0].comments
			});
			if (this.state.eventcomments.length > 0) {
				this.setState({
					comments: true
				});
			}
		});
	};

	componentDidMount = () => {
		this.getComments();
	};
	render() {
		if (this.state.comments) {
			return (
				<div>
					<CommentList data={this.state.eventcomments} />
					<InputComment user={this.state.user} event={this.state.event} getComments={this.getComments} />
				</div>
			);
		} else {
			return (
				<div>
					<p>no comments yet</p>
					<InputComment user={this.state.user} event={this.state.event} getComments={this.getComments} />
				</div>
			);
		}
	}
}
export default CommentSection;
