import React, { Component } from 'react';
import ApiEvent from './ApiEvent';


class ApiList extends Component {
  render() {
    const data = this.props.data
    console.log(data, "here1")
    let element = data.map((number, id) =>
    <ApiEvent info= {[number]} key= {id}/>
    )
  
    return (
      <ul>{element}</ul>
    )
  }
}
export default ApiList