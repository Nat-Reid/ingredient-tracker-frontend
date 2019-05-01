const initialState = {
  ingredients: []
}

const ingredientReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_INGREDIENTS':
      return {...state, ingredients: action.payload}
    case 'START_INGREDIENT_REQUEST':
      return {...state, ingredients: []}
    default:
      return state
  }
}

export default ingredientReducer;
