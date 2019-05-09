import React, { Component } from 'react';

class RecipeCard extends Component{
  handleLink = ev => {
    ev.preventDefault()
    window.open(this.props.url)
  }

  render() {
    return (
      <div><a onClick={this.handleLink} href={this.props.url}>{this.props.name}</a></div>
    );
  }
}

export default RecipeCard
