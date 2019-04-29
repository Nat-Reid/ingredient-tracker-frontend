import userReducer from './userReducer.js'
import userIngredientReducer from './userIngredientReducer.js'
import { combineReducers } from 'redux'

export default combineReducers({
  userReducer,
  userIngredientReducer
})
