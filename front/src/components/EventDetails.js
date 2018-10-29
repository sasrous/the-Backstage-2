import React, { Component } from 'react';
import api from '../lib/api-service'

class EventDetails extends Component {
  render() {
    let displayData = (data) => {
      
      console.log(data)
    }
    const id =  this.props.id
    api.getEventDetails(id).then((result)=>{
      const data = result.data.resultsPage.results.event;
      console.log(data)
      const name = data.displayName
      const city = data.location.city
      console.log(name, city)
      displayData(data)

    })
    if(this.state){
    return(
      <div>
        <p>{id}</p>
        <p>{this.state.city}</p>
     </div>
    )}
    else {
      return(
        <div>
          <p>{id}</p>
       </div>
      )}
   
  }
}
export default EventDetails