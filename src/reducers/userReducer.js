const initialState = {
  user: null
}

const userReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_USER':
      return {...state, user: action.payload}
    case 'START_USER_INGREDIENT_REQUEST':
      return {...state, user: {name: null, username: null}}
    default:
      return state
  }
}

export default userReducer;
