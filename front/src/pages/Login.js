import React, { Component } from 'react';
import auth from '../lib/auth-service';
// import { AuthConsumer } from '../components/AuthProvider';

class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
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
    <h1>Login</h1>
  <form onSubmit={this.handleFormSubmit}>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange}/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
      </div>
        <input type="submit" className="btn btn-primary btn-lg" value="Login" />
   </form>
   
  </div>
  
</div>

    )
  }
}

export default Login;