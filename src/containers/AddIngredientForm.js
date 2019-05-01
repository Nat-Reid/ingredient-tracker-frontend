import React, { Component } from 'react';
import FindIngredientForm from '../components/FindIngredientForm.js'
import IngredientList from '../components/IngredientList.js'
import { connect } from 'react-redux'

class AddIngredientForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      expiration_date: new Date(),
      quantity: ''
    }
  }

  render() {
    return (
      <div>
        <FindIngredientForm />
        <div>
          <IngredientList />
        </div>
      </div>
    );
  }
}

export default AddIngredientForm
