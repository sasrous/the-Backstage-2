import React, { Component } from 'react';
import api from '../lib/api-service'
import JoinButton from './JoinButton';

class EventDetails extends Component {
  componentDidMount = () => {
 
    const id =  this.props.id
    api.getEventDetails(id).then((result)=>{
      
     const data = result.data.resultsPage.results.event;
     this.setState({
      data: data,

    })
   })
  }
  
  render() {
    
   
   
    
    if(this.state){
      let {displayName, uri, location, start, venue}  = this.state.data

    return(
      <div>
        
        <h1>{displayName}</h1>
        <h2>{start.date}</h2>
        <h5>Venue : {venue.displayName}</h5>
        <h5>City: {location.city}</h5>
        <a href={uri} > More Info </a>
        <JoinButton id = {this.props.id}>JOIN</JoinButton>
     </div>
    )}
    else {
      return(
        <div>
          <p>{this.props.id} LOADING </p>
       </div>
      )}
   
  }
}
export default EventDetails