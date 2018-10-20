import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';
class Private extends Component {
  render() {
    const { user } = this.props
    if (! this.props.events ){
      return (
        <div>
          <h1>Welcome {user.username}</h1>
          <p>You haven't joined any events yet</p>
          <Link to='/lobby' className="btn ">Go to Lobby</Link>
          
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome {user.username}</h1>
          <p>Upcoming events:</p>
        </div>
      )}
    
  }
}

export default withAuth()(Private);