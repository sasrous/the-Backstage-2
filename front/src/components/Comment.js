import React, { Component } from 'react';



class Comment extends Component {
 
  
  render() {
    const {user, comment, timestamp}  = this.props.info[0]
    
      return (
        <div>
          <ul class="commentList">
            <li>
                <div class="commenterImage">
                  <img alt = "profile" src="http://profilepicturesdp.com/wp-content/uploads/2018/06/blank-user-profile-picture-1.gif" />
                </div>
                <div class="commentText">
                    <h5>{user.name} @ {user.username}</h5>
                    <p class="">{comment}</p> <span class="date sub-text">on {timestamp}</span>
                </div>
            </li>
            
        </ul>
      
        </div>
      )
    
  }
}
export default Comment