import React, { Component } from 'react';
import { connect } from 'react-redux'
import { findIngredients } from '../Actions.js'

class FindIngredientForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ingredient: ''
    } ;
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.findIngredients(this.state.ingredient)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Search For ingredients
            <input id="ingredient"
              name="ingredient"
              type="text"
              value={this.state.ingredient}
              onChange={this.handleChange}/>
          </label>
          <div>
            <button type="submit">Find Ingredients</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    findIngredients: searchString => dispatch(findIngredients(searchString))
  }
}

export default connect(null,mapDispatchToProps)(FindIngredientForm)
