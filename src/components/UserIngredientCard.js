import React from "react";

const UserIngredientCard = props => {
  console.log("UserIngredient Card props", props);
  return (
    <li className="user-ingredient-card">
      <div>
        <p>
          {props.quantity} {props.name}
        </p>
        <p> Expires in {props.expiration_date}</p>
      </div>
    </li>
  );
};

export default UserIngredientCard;
