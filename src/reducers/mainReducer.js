import userReducer from './userReducer.js'
import userIngredientReducer from './userIngredientReducer.js'
import ingredientReducer from './ingredientReducer.js'
import { combineReducers } from 'redux'

export default combineReducers({
  userReducer,
  userIngredientReducer,
  ingredientReducer
})
