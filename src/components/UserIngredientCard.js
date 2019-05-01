import React from 'react';

const UserIngredientCard = props => {
  console.log("UserIngredient Card props",props)
  return (
    <li>
      <div>
        <p>{props.quantity} {props.name}</p>
        <p> Expires in {props.expiration_date}</p>
      </div>
    </li>
  );
}

export default UserIngredientCard
