const initialState = {
  userIngredients: []
}

const userIngredientReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_USER_INGREDIENTS':
      return {...state, userIngredients: action.payload.userIngredients}
    default:
      return state
  }
}

export default userIngredientReducer;
