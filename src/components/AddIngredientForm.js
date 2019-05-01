import React, { Component } from 'react';
import FindIngredientForm from './FindIngredientForm.js'

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
        Add Ingredients form
      </div>
    );
  }
}

export default AddIngredientForm
