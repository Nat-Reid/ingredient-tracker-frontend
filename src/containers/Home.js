import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import UserIngredientList from './UserIngredientList.js'
import MealForm from '../components/MealForm.js'

const Home = props => {
  return (
    <div className="home-page">
      <UserIngredientList />
      <MealForm />
      <Link to="add-ingredients"> Add Ingredients</Link>
    </div>
    );
}

const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(Home)
