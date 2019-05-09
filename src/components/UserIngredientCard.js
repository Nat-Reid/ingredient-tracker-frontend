import React from "react";
import {selectUserIngredient} from '../Actions.js'
import { connect } from 'react-redux';

const UserIngredientCard = props => {
  console.log("UserIngredient Card props", props);

  let handleClick = ev => {
      props.selectUserIngredient(props.id)
  }

  function style(){
    return props.selected ? {color: "red"} : {}
  }

  return (
    <li className="user-ingredient-card" onClick={handleClick} style={style()}>
      <div>
        <p>
          {props.quantity} {props.name}
        </p>
        <p> Expires in {props.expiration_date}</p>
      </div>
    </li>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    selectUserIngredient: id => dispatch(selectUserIngredient(id))
  }
}

export default connect(null,mapDispatchToProps)(UserIngredientCard);
