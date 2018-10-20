import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';

class Signup extends Component {

  state = {
    username: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.signup({ username, password })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user)
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
<div className="container">
  <div className="col-sm-6 col-sm-offset-3 container2">
      <h1> Signup</h1>
      <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label>Username:</label>
            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control"name="password" value={password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary btn-lg">Signup</button>
      </form>
  
      <p>Already have an account?  <Link to={"/login"}> Login</Link></p>
  </div>
</div>


      
    )
  }
}

export default Signup;