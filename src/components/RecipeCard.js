import React, { Component } from 'react';

class RecipeCard extends Component{
  handleLink = ev => {
    ev.preventDefault()
    window.open(this.props.url)
  }

  renderIngredients = () => {
    return this.props.ingredients.map(ingredient => {
      return <li>{ingredient.name}</li>
    })
  }

  render() {
    return (
      <div>
        <a onClick={this.handleLink} href={this.props.url}>{this.props.name}</a>
        <ul className="recipe-ingredient-list">
          {this.renderIngredients()}
        </ul>
      </div>
    );
  }
}

export default RecipeCard
