import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { setUser } from '../Actions.js'
import { setToken } from '../index.js'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: ''
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
    fetch(`http://localhost:3000/login`, {
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
    if (json.jwt){
      setToken(json.jwt)
      this.props.setUser(json.user)
    }else{
      this.setState({message: json.message})
    }
  }

  render() {
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
                type="text"
                value={this.state.password}
                onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <button type="submit">Log in</button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(null,mapDispatchToProps)(Login);
