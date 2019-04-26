import React from 'react';
import { connect } from 'react-redux'
import {Route, Link, Switch, Redirect, BrowserRouter as Router} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const App = props => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={() => props.user ? <Redirect to="/home"/> : <Login/>}/>
          <Route path="/home" component={() => !props.user ? <Redirect to="/login"/> : <Home/>}/>
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(App)
