import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../components/Searchbar';
// import { AuthConsumer } from '../components/AuthProvider';

class Lobby extends Component {

  render() {   
    return (
      <div id= "wrapper1">
  <div className="container on-top">
   <div className="title text-center">
    
        <h1 > THE LOBBY </h1>
        <h4 > search for upcoming events :</h4>
      
    </div>  
    <Searchbar/>  
  </div>


</div>

    )
  }
}

export default Lobby;
