import React, { Component } from 'react';


class ApiList extends Component {
  render() {
    const eventname = this.props.info[0].performance[0].displayName
    const date = this.props.info[0].start.date
    const location = this.props.info[0].location.city
    const venue = this.props.info[0].venue.displayName
    const uri = this.props.info[0].uri
    return(
      <div class="list-group">
      
      <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{eventname} at {venue}</h5>
          <big class="text-muted">{date}</big>
        </div>
        <p class="mb-1">{uri}}</p>
        <small class="text-muted">{location}</small>
      </a>

    </div>
    )
   
  }
}
export default ApiList