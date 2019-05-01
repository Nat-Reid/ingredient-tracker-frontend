import React from 'react';
import { connect } from 'react-redux'

import IngredientList from './IngredientList.js'
import MealForm from '../components/MealForm.js'

const Home = props => {
  return (
    <div className="HomePage">
      <IngredientList />
      <MealForm />
    </div>
    );
}

const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(Home)
