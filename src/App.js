import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux'
import { getUser } from './index.js'

import {Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login'
import Home from './containers/Home'

class App extends Component{
  componentDidMount(){
    if (!this.props.user && localStorage.getItem("IngredientTrackerToken")){
      getUser()
    }
  }
  //deal with user better later
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={() => !this.props.user ? <Redirect to="/login"/> : <Redirect to="/home"/>} />
            <Route path="/login" component={() => this.props.user ? <Redirect to="/home"/> : <Login/>}/>
            <Route path="/home" component={() => !this.props.user ? <Redirect to="/login"/> : <Home/>}/>
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
