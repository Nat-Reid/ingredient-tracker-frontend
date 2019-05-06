import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserIngredientCard from '../components/UserIngredientCard'

class UserIngredientList extends Component{
  renderUserIngredients() {
    return this.props.userIngredients.map((userIngredient, index ) => {
      return <UserIngredientCard {...userIngredient} key={index}/>
    })
  }

  render() {
    console.log("ingredient list props", this.props)
    return (
      <div className="user-ingredient-list">
        I am your IngredientList
        <ul>
          {this.renderUserIngredients()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({userIngredientReducer}) => {
  return {...userIngredientReducer}
}

export default connect(mapStateToProps)(UserIngredientList)
