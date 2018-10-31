import React, { Component } from 'react';
import auth from '../lib/auth-service';

class JoinButton extends Component {
  state = {
    joined : false,
    id : this.props.id.toString(),
    joinEvent : (event) => {
      auth.join(event)
      this.setState({ 
        joined : true
      })
    },
    checkEvent : (event) => {
    
      auth.check(event)
      .then((data) => {
      
        if(data.length === 0){    
          this.setState({
            joined : false
          })
        }
        else {
        this.setState({
          joined : true
          })
        }
      })
    },
    unfollowEvent : (event) => {
      auth.delete(event)
      .then((data) => {
        console.log(data, "data")
        this.setState({
          joined : false
        })
      })
    }
  }
  componentDidMount = () => {
    let ID = this.state.id
    console.log(ID, "correct" )
    this.state.checkEvent({id: this.state.id})    
  }
    
  render() {
    if (this.state.joined ) {
      return(
        <button onClick={() => {this.state.unfollowEvent({id: this.state.id})}}>Unfollow</button>
      )
    }
    else {
      return(
        <button onClick={() => {this.state.joinEvent({id: this.state.id})}}>Join</button>
      )

    }
    
  
  }
}

export default JoinButton;