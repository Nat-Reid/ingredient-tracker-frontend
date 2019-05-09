const initialState = {
  recipes: []
}

const recipeReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_RECIPES':
      return {...state, recipes: action.payload}
    case 'START_RECIPE_REQUEST':
      return {...state, recipes: []}
    default:
      return state
  }
}

export default recipeReducer;
