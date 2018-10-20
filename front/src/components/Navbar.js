import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../components/AuthProvider';

class Navbar extends Component {
  render() {
    const { isLogged, user, logout } = this.props;
    const { username } = user;
    if (isLogged) {
      return <div>
        <Link to='/'className="btn ">Home</Link>
        <Link to='/private' className="btn "> Profile</Link>
        <Link to='/lobby'className="btn "> Lobby</Link>
        <Link to = '/'  className="btn-warning " onClick={logout}>Logout</Link>   
        <p>Logged in as: { username }</p>
      </div>
    } else {
      return <div>
        <Link to='/'className="btn ">Home</Link>
        <Link to='/login'className="btn ">Login</Link>
        <Link to='/signup'className="btn ">Signup</Link>
      </div>
    }
  
  }
}

export default withAuth()(Navbar);