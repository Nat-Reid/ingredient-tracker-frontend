import React, { Component } from 'react';
import { connect } from 'react-redux'
import { findIngredients } from '../Actions.js'

class FindIngredientForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      ingredient: '',
      message: ''
    } ;
  }

  handleChange = (ev) => {
    if (/^[a-zA-Z ]*$/.test(ev.target.value)){
      this.setState({
        [ev.target.name]: ev.target.value.toLowerCase()
      })
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    if(this.state.ingredient.length >= 3){
      this.setState({message: ""})
      this.props.findIngredients(this.state.ingredient)
    }else{
      this.setState({message: "Must be at least 3 letters"})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p style={{color: "red"}}>{this.state.message}</p>
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
