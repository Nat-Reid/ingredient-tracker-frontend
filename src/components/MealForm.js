import React, { Component } from 'react';
import { generateRecipes } from '../Actions.js'
import { connect } from 'react-redux'

class MealForm extends Component{
  handleClick = () => {
    this.props.generateRecipes()
  }

  render() {
    return (
      <button className="meal-form" onClick={this.handleClick}>Find meals</button>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    generateRecipes: () => dispatch(generateRecipes())
  }
}

export default connect(null,mapDispatchToProps)(MealForm)
