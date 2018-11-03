import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Comment extends Component {
	render() {
		const { user, comment, timestamp, id } = this.props.info[0];

		return (
			<div>
				<ul className="commentList">
					<li>
						<div className="commenterImage">
							<img alt="profile" src={user.profilePicture} />
						</div>
						<div className="commentText">
							<h5>
								<Link to={`/user/${user._id}`}>
									{user.name} @ {user.username}
								</Link>
							</h5>
							<p className="">{comment}</p> <span className="date sub-text">on {timestamp}</span>
						</div>
					</li>
				</ul>
			</div>
		);
	}
}
export default Comment;
