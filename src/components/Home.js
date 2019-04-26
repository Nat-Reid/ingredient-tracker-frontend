import React, { Component } from 'react';
import { connect } from 'react-redux'

const Home = props => {
  return (
    <div>
      HI {props.user ? props.user.name : "SOMETHING WENT WRONG, YOU DON'T EXIST"} <br/>
      WELCOME TO FOOD APP <br/>
      HERE IS YOUR JWT {localStorage.getItem("IngredientTrackerToken")} <br/>
      HAVE FUN KEEPING YOUR INFO SAFE
    </div>
    );
}

const mapStateToProps = ({userReducer,authReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(Home)
