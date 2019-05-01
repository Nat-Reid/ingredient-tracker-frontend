import React from 'react';
import { connect } from 'react-redux'

import UserIngredientList from './UserIngredientList.js'
import AddIngredientForm from './AddIngredientForm.js'

const AddIngredients = props => {
  return (
    <div className="AddIngredientsPage">
      <UserIngredientList />
      <AddIngredientForm />
    </div>
    );
}

const mapStateToProps = ({userReducer}) => {
  return {...userReducer}
}

export default connect(mapStateToProps)(AddIngredients)
