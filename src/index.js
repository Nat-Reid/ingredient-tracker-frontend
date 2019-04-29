import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import reducer from './reducers/mainReducer.js'

import App from './App'

////////////////////////////////////////////////////////////////

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const BASE_URL = "http://localhost:3001/"
const API_URL = "http://localhost:3000"

export function setToken(token){
  localStorage.setItem("IngredientTrackerToken", token)
}

export function getUser(){
  fetch(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("IngredientTrackerToken")}`
    }
  })
  .then(response => {
    return response.json()
  })
  .then(json => {
    store.dispatch({
      type: "SET_USER",
      payload: json
    })
    getUserIngredients()
  });
}

export function getUserIngredients(){
  fetch(`${API_URL}/user_ingredients`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("IngredientTrackerToken")}`
    }
  })
  .then(response => {
    return response.json()
  })
  .then(json => {
    console.log(json)
    store.dispatch({
      type: "SET_USER_INGREDIENTS",
      payload: {userIngredients: json}
    })
  });
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
