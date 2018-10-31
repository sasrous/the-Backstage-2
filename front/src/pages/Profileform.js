import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { withAuth } from '../components/AuthProvider';

// import { AuthConsumer } from '../components/AuthProvider';

class Profileform extends Component {
  state = {
    name: "",
    age: "",
    about: "",
  }
  redirect = () => {
    let path = `/private`;
    this.props.history.push(path);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, about, age } = this.state
    const { user } = this.props
    const newUser = {
      _id: user._id,
      username: user.username,
      password: user.password,
      about: about || user.about,
      age: age || user.age,
      name: name || user.name,
      eventsJoined: user.eventsJoined,
    }
    auth.edit(newUser).then(() => {
      this.props.setUser(newUser)
      this.redirect()
    })
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { name, about, age } = this.state;
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3 container2">
          <h1>About you</h1>
        <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input type="text" className="form-control" name="name" value={name} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>About:</label>
              <input type="text" className="form-control" name="about" value={about} onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label>age:</label>
              <input type="text" className="form-control" name="age" value={age} onChange={this.handleChange} />
            </div>
              <input type="submit" className="btn btn-primary btn-lg" value="Submit" ></input>
        </form>
        </div>    
      </div>
    )
  }
}

export default withAuth()(Profileform);