import React from 'react';
import { connect } from 'react-redux'

import IngredientList from './IngredientList.js'
import AddIngredientForm from '../components/AddIngredientForm.js'

const AddIngredients = props => {
  return (
    <div className="AddIngredientsPage">
      <IngredientList />
      <AddIngredientForm />
    </div>
    );
}

const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(AddIngredients)
