import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectIngredient } from '../Actions.js'

class IngredientList extends Component{

  renderIngredients(){
    return this.props.ingredients.map((ingredient, index) => {
      let color = this.props.selectedIngredient === ingredient.id ? "red" : "black"
      return <li key={index}
              style={{color}}
              onClick={() => this.props.selectIngredient(ingredient)}>
                {ingredient.name}
              </li>
    })
  }

  render() {
    return (
      <ul>
        {this.renderIngredients()}
      </ul>
    );
  }
}

const mapStateToProps = ({ingredientReducer}) => {
  return {...ingredientReducer}
}

const mapDispatchToProps = dispatch => {
  return {
    selectIngredient: ingredient => dispatch(selectIngredient(ingredient))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IngredientList)
