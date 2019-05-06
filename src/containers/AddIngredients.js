import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import IngredientList from '../components/IngredientList.js'

import UserIngredientList from './UserIngredientList.js'
import AddIngredientForm from './AddIngredientForm.js'

const AddIngredients = props => {
  return (
    <div className="add-ingredients-page">
      <UserIngredientList />
      <AddIngredientForm />
      <IngredientList />
      <Link to="home"> home </Link>
    </div>
    );
}

const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(AddIngredients)
