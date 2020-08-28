import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserIngredientCard from '../components/UserIngredientCard'

class UserIngredientList extends Component{
  renderUserIngredients() {
    this.props.userIngredients.sort((a,b) => {
      let aTime = new Date(a.expiration_date).getTime()
      let bTime = new Date(b.expiration_date).getTime()
      return aTime > bTime ? 1 : aTime < bTime ? -1 : 0
    })
    return this.props.userIngredients.map((userIngredient, index ) => {
      return <UserIngredientCard {...userIngredient} key={index}/>
    })
  }

  render() {
    return (
      <div className="user-ingredient-list">
        Select Ingredients you'd like to be in your meal
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
