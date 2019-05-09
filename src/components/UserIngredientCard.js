import React from "react";
import {selectUserIngredient, deleteUserIngredient} from '../Actions.js'
import { connect } from 'react-redux';

const UserIngredientCard = props => {
  function classes(){
    let classList = "user-ingredient-div"
    classList += new Date(props.expiration_date).getTime() < new Date().getTime() ? " expired" : ""
    classList += props.selected? " selected" : ""
    return classList
  }

  return (
    <li className="user-ingredient-card">
      <div onClick={() => props.selectUserIngredient(props.id)} className={classes()}>
        <p>
          {props.quantity} {props.name}
        </p>
        <p> Expires in {props.expiration_date}</p>
      </div>
      <button onClick={() => props.deleteUserIngredient(props.id)}>Used/Threw Away</button>
    </li>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    selectUserIngredient: id => dispatch(selectUserIngredient(id)),
    deleteUserIngredient: id => dispatch(deleteUserIngredient(id))
  }
}

export default connect(null,mapDispatchToProps)(UserIngredientCard);
