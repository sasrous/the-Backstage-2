import React, { Component } from 'react';
import ApiEvent from './ApiEvent';


class ApiList extends Component {
  
  render() {
    if(this.props.data.length === 0 ){
      return (
        <h4>No events in this area</h4>
      )
    }
    else {
      const data = this.props.data
      let element = data.map((number, id) =>
      <ApiEvent routeChange = {this.props.routeChange} info= {[number]} key= {id}/>)
      return (
        <ul>{element}</ul>
      )
    }
  }
}
export default ApiList