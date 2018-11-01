import React, { Component } from 'react'
import { withAuth } from '../components/AuthProvider';
import { Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
class Private extends Component {
  state = {
    joined : true,
    user : this.props.user
  }
 
  render() {
    
    const  user  = this.state.user

    if (! this.state.user.eventsJoined ){
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
          <div className="profileImage">
            <img alt = "profile" src="http://profilepicturesdp.com/wp-content/uploads/2018/06/blank-user-profile-picture-1.gif" />
          </div>
          <h1>Welcome {user.username}</h1>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
          <h3>About: {user.about}</h3>
          <Link to='/edit' className="btn ">EDIT INFO</Link>
          <h3>Your Calendar:</h3>
          <Calendar data = {user.eventsJoined} ></Calendar>
        </div>
      )}
    
  }
}

export default withAuth()(Private);