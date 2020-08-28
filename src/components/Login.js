import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getUser } from '../Actions.js'
import { setToken } from '../index.js'
import { Redirect, Link } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
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
    let valid = this.state.username !== "" && this.state.password !== ""
    if(valid){this.handleLogin(this.state)}
    else{this.setState({message: "please fill in a username and password"})}
  }

  handleLogin = ({username, password}) => {
    console.log("login fetch")
    fetch(`http://localhost:3001/login`, {
      method: 'POST',
    	headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    	},
    	body: JSON.stringify({username, password})
    })
    .then(response => response.json())
    .then(this.handleResponse);
  }

  handleResponse = json => {
    console.log("THIS IS LOGIN RESPONSE", json)
    if (json.jwt){
      setToken(json.jwt)
      console.log(localStorage.getItem('IngredientTrackerToken'))
      this.props.getUser(json.user)
      this.setState({redirect: true}, () => console.log(this.state))
    }else{
      this.setState({message: json.message})
    }
  }

  render() {
    if (this.state.redirect){
      return <Redirect to='/home' />
    }
    return (
      <Fragment>
        <div className="login-message">{this.state.message}</div>
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
              Password
              <input id="password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
        <Link to='/signup'>Signup</Link>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: (user) => dispatch(getUser(user))
  }
}

export default connect(null,mapDispatchToProps)(Login);
