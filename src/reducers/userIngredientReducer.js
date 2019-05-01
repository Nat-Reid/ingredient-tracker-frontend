const initialState = {
  userIngredients: []
}

const userIngredientReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_USER_INGREDIENTS':
      return {...state, userIngredients: action.payload}
    case 'START_USER_INGREDIENT_REQUEST':
      return {...state, userIngredients: []}
    case 'ADD_USER_INGREDIENT':
      return {...state,
              userIngredients: state.userIngredients.concat(action.payload.user_ingredient)}
    default:
      return state
  }
}

export default userIngredientReducer;
