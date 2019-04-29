import React, { Component } from 'react';
import { connect } from 'react-redux'
import IngredientCard from '../components/IngredientCard'

class IngredientList extends Component{
  renderIngredients() {
    return this.props.userIngredients.map((userIngredient, index ) => {
      return <IngredientCard {...userIngredient} key={index}/>
    })
  }

  render() {
    console.log("ingredient list props", this.props)
    return (
      <div>
        I am your IngredientList
        <ul>
          {this.renderIngredients()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({userIngredientReducer}) => {
  return {...userIngredientReducer}
}

export default connect(mapStateToProps)(IngredientList)
