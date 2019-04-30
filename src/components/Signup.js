import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { setUser } from '../Actions.js'
import { setToken } from '../index.js'
import { Redirect, Link } from 'react-router-dom'


class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      name: '',
      password: '',
      confirmPassword: '',
      message: '',
      redirect: false
    };
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    let notEmpty = this.state.username !== "" && this.state.password !== ""
    let valid = this.state.password === this.state.confirmPassword
    if(valid && notEmpty){
      this.handleSignup(this.state)
    }else if (!notEmpty){
      this.setState({message: "please fill in a username and password"})
    }else if (!valid){
      this.setState({message: "passwords must match"})
    }
  }

  handleSignup = ({username, password, name}) => {
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
    	headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    	},
    	body: JSON.stringify({user: {username, password, name}})
    })
    .then(response => response.json())
    .then(this.handleResponse);
  }

  handleResponse = json => {
    console.log(json)
    if (json.jwt){
      setToken(json.jwt)
      this.props.setUser(json.user)
      this.setState({redirect: true})
    }else{
      this.setState({message: json.message})
    }
  }

  render() {
    if (this.state.redirect){
      return <Redirect to='/addIngredients' />
    }
    return (
      <Fragment>
        <div className="signup-message">{this.state.message}</div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Username
              <input id="username"
                name="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Name
              <input id="name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Password
              <input id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Confirm Password
              <input id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <button type="submit">Sign up</button>
          </div>
        </form>
        <Link to='/login'>Login</Link>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(null,mapDispatchToProps)(Signup);
