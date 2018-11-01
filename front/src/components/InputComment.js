import React, { Component } from 'react';
import eventApi from '../lib/event-service';


class InputComment extends Component {
  state = {
   user: this.props.user,
   eventID: this.props.event,
   comment : ''
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    var timestamp = Date.now();
    timestamp= new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
    const { user, comment, eventID } = this.state
    const newcomment = {
      user: user,
      event: eventID,
      comment : comment,
      timestamp : timestamp
    }
    eventApi.editEvent(eventID, newcomment).then(() => {
    
    })
  }

  handleChange = (event) => {  
    const { value} = event.target;
    this.setState({comment: value});
  }
  
  render() {
    
    const {comment} = this.state;
    
    return (
      <div>
      <form class="form-inline" onSubmit={this.handleFormSubmit}>
      <div class="form-group">
          
          <input class="form-control" type="text" placeholder="Drop a comment" name="comment" value={comment} onChange={this.handleChange}/>
      </div>
      <div class="form-group">
          <button type="submit" class="btn btn-default" value="Add"> comment </button>
      </div>
     </form>  
      </div>
      
    )
    
  }
}
export default InputComment