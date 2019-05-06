import React, { Component } from 'react';
import FindIngredientForm from '../components/FindIngredientForm.js'
import { connect } from 'react-redux'
import { addUserIngredient, clearIngredients } from '../Actions.js'

class AddIngredientForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      expirationDate: new Date(),
      quantity: 0
    }
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.addUserIngredient(this.state.expirationDate,this.state.quantity)
    this.props.clearIngredients()
    this.setState({expirationDate: new Date(), quantity: 0})
  }

  render() {
    return (
      <div className="add-ingredient-form">
        <FindIngredientForm />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Expiration Date
              <input id="expirationDate"
                name="expirationDate"
                type="date"
                value={this.state.expirationDate}
                onChange={this.handleChange}/>
            </label>
          </div>
          <div>
            <label>
              Quantity
              <input id="quantity"
                name="quantity"
                type="number"
                value={this.state.quantity}
                onChange={this.handleChange}/>
            </label>
          </div>
          <button type="submit">Add Ingredient</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUserIngredient: (expirationDate, quantity) => dispatch(addUserIngredient(expirationDate, quantity)),
    clearIngredients: () => dispatch(clearIngredients())
  }
}

export default connect(null, mapDispatchToProps)(AddIngredientForm)
