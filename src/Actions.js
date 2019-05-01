function handleErrors(response) {
    if (!response.ok) {
      console.log("BAD RESPONSE", response)
      throw Error(response.message);
    }
    return response;
}

function jwtFetch(method, endpoint, callback, body){
  console.log("FETCHING SOETHING")
  return fetch(`http://localhost:3000/${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("IngredientTrackerToken")}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(handleErrors)
  .then(response => {
    return response.json()
  })
  .then(json => {
    console.log("Fetch Response From",endpoint, ":",json)
    return json
  })
  .then(callback)
  .catch(console.log)
}

export const getUser = () => {
  return (dispatch) => {
    dispatch(getUserIngredients())
    dispatch({type: 'START_USER_REQUEST'})
    return jwtFetch("GET","profile", json => dispatch({type: 'SET_USER', payload: json.user}))
    // {user: {username: "", name: ""}}
  };
}

export const getUserIngredients = () => {
  return (dispatch) => {
    dispatch({type: 'START_USER_INGREDIENT_REQUEST'})
    return jwtFetch("GET","user_ingredients", json => dispatch({type: 'SET_USER_INGREDIENTS', payload: json}))
    // [{name: "", expiration_date: ...}, {}, {}]
  };
}

export const findIngredients = (searchString) => {
  return (dispatch) => {
    dispatch({type: 'START_INGREDIENT_REQUEST'})
    return jwtFetch("GET",`find-ingredients/${searchString}`, ingredients => dispatch({type: 'SET_INGREDIENTS', payload: ingredients}))
  }
}

export const deleteUserIngredient = id => {
  return (dispatch) => {
    return jwtFetch("DELETE",`user_ingredients/${id}`, ({id}) => dispatch({type: 'DELETE_USER_INGREDIENT', payload: id}))
  }
}

export const selectIngredient = ingredient => {
  return (dispatch) => {
    dispatch({type: "SELECT_INGREDIENT", payload: ingredient})
  }
}

export const addUserIngredient = (expiration_date, quantity) => {
  return (dispatch, getState) => {
    let id = getState().ingredientReducer.selectedIngredient
    jwtFetch("POST","user_ingredients",json => dispatch({type: "ADD_USER_INGREDIENT", payload: json}),{user_ingredient: {ingredient_id: id,quantity,expiration_date}})
  }
  // {user_ingredient: {id, expiration_date, name, quantity}}
}

export const clearIngredients = () =>{
  return (dispatch) => {
    dispatch({type: "CLEAR_INGREDIENTS"})
  }
}
