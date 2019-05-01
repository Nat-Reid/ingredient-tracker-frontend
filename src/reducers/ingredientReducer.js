const initialState = {
  ingredients: [], selectedIngredient: null
}

const ingredientReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_INGREDIENTS':
      return {...state, ingredients: action.payload}
    case 'START_INGREDIENT_REQUEST':
      return {...state, ingredients: []}
    case 'SELECT_INGREDIENT':
      return {...state, selectedIngredient: action.payload.id}
    default:
      return state
  }
}

export default ingredientReducer;
