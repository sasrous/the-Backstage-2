import React, { Component } from 'react';
import CommentList from './CommentList';
import InputComment from './InputComment';
import EventApi from '../lib/event-service';

class CommentSection extends Component {
  state = {
    comments: false,
    user : this.props.user,
    event : this.props.event,
    eventcomments: [],
    }

    componentDidMount = () => {
      EventApi.getEvent(this.state.event).then((data) => {
        this.setState({
          eventcomments: data.data[0].comments
        })
        if (this.state.eventcomments.length > 0){
          this.setState({
            comments : true
          })
        }
      })
  
    }
  render() {
    if (this.state.comments){
      return (
        <div>
        <CommentList data = {this.state.eventcomments}></CommentList>
        <InputComment user ={this.state.user} event = {this.state.event} ></InputComment>
        </div>
      )
    }
    else {
      return(
      <div>
        <p>no comments yet</p>
        <InputComment user ={this.state.user} event = {this.state.event} ></InputComment>
      </div>
      )
    }
  }
}
export default CommentSection