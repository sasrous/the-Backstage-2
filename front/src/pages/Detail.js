import React, { Component, Fragment } from 'react'
import eventApi from  '../lib/event-service';
import { Link } from 'react-router-dom';
import EventDetails from '../components/EventDetails';
export default class Detail extends Component {
  
  state = {
    data: {},
    isLoading: true,
  }

  componentDidMount() {
    const { id } = this.props.match.params; 
   if (eventApi.getEvent(id)) {
      eventApi.getEvent(id)
        .then(({data}) => {
          this.setState({
            data: data,
            isLoading: false,
          })
        })
      }
    
    else {
      eventApi.createEvent(id)
      .then(() => {
        eventApi.getEvent(id)
        .then(({data}) => {
          this.setState({
            data: data,
            isLoading: false,
          })
        })
      })
      .catch((error) => {console.log(error)})
    }
  }

  renderInfo = () => {
    const  id  = this.state.data.value;
    console.log(this.state.data.value)
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
