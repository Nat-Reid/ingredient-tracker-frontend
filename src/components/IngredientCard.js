import React from 'react';

const IngredientCard = props => {
  console.log("Ingredient Card props",props)
  return (
    <li>
      <div>
        <p>{props.quantity} {props.name}</p>
        <p> Expires in {props.expiration_date}</p>
      </div>
    </li>
  );
}

export default IngredientCard
