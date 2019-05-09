import React, { Component } from 'react';

class RecipeCard extends Component{
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
}

export default RecipeCard
