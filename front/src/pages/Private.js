import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
class Private extends Component {
  render() {
    const { user } = this.props
    console.log(this.props.user.eventsJoined)
    if (! this.props.user.eventsJoined ){
      return (
        <div>
          <h1>Welcome {user.username}</h1>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
          <h3>About: {user.about}</h3>
          <Link to='/edit' className="btn ">EDIT INFO</Link>
          <p>You haven't joined any events yet</p>
          <Link to='/lobby' className="btn ">Go to Lobby</Link>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Welcome {user.username}</h1>
          <h3>Name: {user.about}</h3>
          <h3>Age: {user.about}</h3>
          <h3>About: {user.about}</h3>
          <Link to='/edit' className="btn ">EDIT INFO</Link>
          <p>Upcoming events:</p>
          <Calendar data = {user.eventsJoined}></Calendar>
        </div>
      )}
    
  }
}

export default withAuth()(Private);