import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Navbar extends Component {
	render() {
		const { isLogged, user, logout } = this.props;
		const { username } = user;
		if (isLogged) {
			return (
				<div className="nav-bar">
					<Link className="nav-bar-item btn" to="/">
						Home
					</Link>
					<Link className="nav-bar-item btn" to="/private">
						{' '}
						Profile
					</Link>
					<Link className="nav-bar-item btn" to="/lobby">
						{' '}
						Lobby
					</Link>
					<Link className="nav-bar-item btn logout" to="/" onClick={logout}>
						Logout
					</Link>
				</div>
			);
		} else {
			return (
				<div>
					<Link to="/" className="btn ">
						Home
					</Link>
					<Link to="/login" className="btn ">
						Login
					</Link>
					<Link to="/signup" className="btn ">
						Signup
					</Link>
				</div>
			);
		}
	}
}

export default withAuth()(Navbar);
