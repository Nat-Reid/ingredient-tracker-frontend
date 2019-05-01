import React from 'react';
import { Component } from 'react'
import { connect } from 'react-redux'
import { getUser, getUserIngredients } from './Actions.js'
import { deleteToken } from './index.js'

import {Route, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './containers/Home'
import AddIngredients from './containers/AddIngredients'

class App extends Component{
  componentDidMount() {
    this.props.getUser()
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
        <a href='/login' onClick={deleteToken}>Sign Out</a>{/*reloads page and gets rid of store */}
        <div>
          <Switch>
            <Route exact path="/" component={() => !this.props.user ? <Redirect to="/login"/> : <Redirect to="/home"/>} />
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={() => this.protectedPath(<Home/>)}/>
            <Route path="/add-ingredients" component={() => this.protectedPath(<AddIngredients/>)}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
    getUser: () => dispatch(getUser()),
    getUserIngredients: () => dispatch(getUserIngredients())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
