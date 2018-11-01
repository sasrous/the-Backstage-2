import React, { Component } from 'react';
import CalendarEvent from '../components/CalendarEvent';


class Calendar extends Component {
  state = {
    joined: true
  }
  
  render() {
   
    const data = this.props.data
    let element = data.map((number, id) =>
    <CalendarEvent info= {[number]} key= {id} />)
    return (
      <ul>{element}</ul>
    )
    
  }
}
export default Calendar