import React, { Component } from 'react';


class ApiList extends Component {
  render() {
    const eventname =  this.props.info[0].displayName
    const date = this.props.info[0].start.date
    const location = this.props.info[0].location.city
    const venue = this.props.info[0].venue.displayName
    const id = this.props.info[0].id

    return(
     
      <div className="list-group">
      <a href={'/lobby/'+ id} className="list-group-item list-group-item-action flex-column align-items-start">
        <big className="text-muted">{date}</big>
        <div className="d-flex w-100 justify-content-between">
        <h4 className="mb-1">{eventname} </h4>  
        </div>
        <h5 className="mb-1"> > {venue}</h5>
        <small className="text-muted">{location}</small> 
      </a>
    </div>
    )
   
  }
}
export default ApiList