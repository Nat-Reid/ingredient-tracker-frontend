import React, { Component } from 'react';
import FindIngredientForm from '../components/FindIngredientForm.js'
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
        Add Ingredients form
        {console.log(this.props.ingredients)}
      </div>
    );
  }
}

const mapStateToProps = ({ingredientReducer}) => {
  return {...ingredientReducer}
}

export default connect(mapStateToProps)(AddIngredientForm)
