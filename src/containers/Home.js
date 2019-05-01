import React from 'react';
import { connect } from 'react-redux'

import UserIngredientList from './UserIngredientList.js'
import MealForm from '../components/MealForm.js'

const Home = props => {
  return (
    <div className="HomePage">
      <UserIngredientList />
      <MealForm />
    </div>
    );
}

const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(Home)
