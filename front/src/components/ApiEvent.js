import React, { Component } from 'react';


class ApiList extends Component {
  render() {
    const eventname = this.props.info[0].displayName
 

    return(
     <p>{eventname}</p>
    )
   
  }
}
export default ApiList