import React, { Component, Fragment } from 'react'
import eventApi from  '../lib/event-service';
import { Link } from 'react-router-dom';
import EventDetails from '../components/EventDetails';


export default class Detail extends Component {
  
  state = {
    id: {},
    isLoading: true,
  }

  componentDidMount() {
    const { id } = this.props.match.params; 
    eventApi.getEvent(id)
    .then(({data}) => {
      if(data.length === 0){
        eventApi.createEvent(id).catch((error) => {console.log(error)})
        this.setState({
          id: id,
          isLoading: false,
        })
      console.log("work")        
      }
      else {

        this.setState({
          id: id,
          isLoading: false,
        })
      }
    })
  }
  

  renderInfo = () => {
    const  id  = this.state.id;
  
    return (
      <Fragment>
        <EventDetails id = {id}> </EventDetails>
        <Link to="/lobby">Back to the Lobby</Link>
      </Fragment>
    );
  }

  render() {
    
    return (
      <div>
        { !this.state.isLoading ? this.renderInfo() : <div>Loading</div>}
      </div>
    )
  }
}
