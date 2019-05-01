import React, { Component } from 'react';

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
  
  render() {
    return (
      <form>
        <div>
          <label>
            Search For ingredients
            <input id="username"
              name="username"
              type="text"
              value={this.state.ingredient}
              onChange={this.handleChange}/>
          </label>
        </div>
      </form>
    );
  }
}

export default FindIngredientForm
