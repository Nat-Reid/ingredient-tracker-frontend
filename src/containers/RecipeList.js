import React, { Component } from 'react';
import { connect } from 'react-redux'
import RecipeCard from '../components/RecipeCard'

class RecipeList extends Component{
  renderRecipes() {
    return this.props.recipes.map((recipe, index ) => {
      return <RecipeCard {...recipe} key={index}/>
    })
  }

  render() {
    console.log("ingredient list props", this.props)
    return (
      <div className="recipe-list">
        Recipes
        <ul>
          {this.renderRecipes()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({recipeReducer}) => {
  return {...recipeReducer}
}

export default connect(mapStateToProps)(RecipeList)
