import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from './index.js'

import {Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './containers/Home'

class App extends Component{
  componentDidMount(){
    if (!this.props.user && localStorage.getItem("IngredientTrackerToken")){
      getUser()
    }
  }

  protectedPath(component){
    if (this.props.user){
      return component
    }else{
      return (
        <div className="Protected">
          <p> You must me logged in to view this content</p>
          <a href="/login">log in</a>
          <a href="/signup">sign up</a>
        </div>
      )
    }
  }

  //deal with user better later
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={() => !this.props.user ? <Redirect to="/login"/> : <Redirect to="/home"/>} />
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={() => this.protectedPath(<Home/>)}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}
//
// const mapDispatchToProps = dispatch => {
//   return {
//     setUser: (user) => dispatch(setUser(user))
//   }
// }

export default connect(mapStateToProps)(App)
