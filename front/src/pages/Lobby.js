import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
// import { AuthConsumer } from '../components/AuthProvider';
import ApiList from '../components/ApiList';

class Lobby extends Component {

  state = {
      datafunc : (data) => {
        this.setState({
          data : data
        })
      },
      data : [],
      routeChange : (Id) => {
        let path = `/lobby/${Id}`;
        this.props.history.push(path);
      },
  }
  

  render() {   

    return (
      <div id= "wrapper1">
        <div className="container on-top">
        <div className="title text-center">    
          <h1 > THE LOBBY </h1>
          <h4 > search for upcoming events :</h4>
        </div>
        <Searchbar datafunc = {this.state.datafunc}/>  
        <ApiList data = {this.state.data} routeChange= {this.state.routeChange}/>
        </div>
      </div>
    )
  }
}

export default Lobby;
