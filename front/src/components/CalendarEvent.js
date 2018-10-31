import React, { Component } from 'react';
import api from '../lib/api-service';
import JoinButton from './JoinButton';

class CalendarEvent extends Component {
  state = {
    id : this.props.info,
    displayName : "loading",
    date  : "loading",
    venue : "loading",
    location : "loading",
    data : []
  }
  componentDidMount() {
    const id = this.props.info
    api.getEventDetails(id)
    .then(({data}) => {
        console.log(data.resultsPage.results.event, "data")
        let eventData = data.resultsPage.results.event
        this.setState({
          id: eventData.id,
          displayName: eventData.displayName,
          date: eventData.start.date,
          venue: eventData.venue.displayName,
          location: eventData.location.city,
          data: data,
        })
      })
  }
  render() {

    const id = this.props.info
    console.log(this.props)
    return(
     
      <div className="list-group">
      <div  className="list-group-item list-group-item-action flex-column align-items-start">
        <big className="text-muted">{this.state.date}</big>
        <div className="d-flex w-100 justify-content-between">
        <h4 className="mb-1">{this.state.displayName} {id} </h4> 
        <JoinButton id = {this.state.id}> JOIN</JoinButton>
        </div>
        <a href={'/lobby/'+ id}> DETAILS</a>
        <h5 className="mb-1"> {this.state.location}</h5>
        <small className="text-muted">{this.state.venue}</small> 
      </div>
    </div>

    )
   
  }
}
export default CalendarEvent