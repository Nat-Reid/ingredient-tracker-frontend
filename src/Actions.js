async function handleErrors(response) {
    if (!response.ok) {
      let error_message
      await response.json().then(j => error_message = j.message);
      throw new Error(error_message)
    }
    return response;
}

function configObj(method, body){
  return {
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("IngredientTrackerToken")}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(body),
  }
}

function jwtFetch(method, endpoint, callback, body){
  // console.log("FETCHING FROM", endpoint)
  return fetch(`http://localhost:3001/${endpoint}`, configObj(method,body))
  .then(handleErrors)
  .then(res => res.json())
  // .then(json => {
  //   console.log("Fetch Response From",endpoint, ":",json)
  //   return json
  // })
  .then(callback)
  .catch(alert)
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

export const generateRecipes = () => {
  return (dispatch,getState) => {
    dispatch({type: 'START_RECIPE_REQUEST'})
    let selected_ingredient_ids = getState().userIngredientReducer.userIngredients
    selected_ingredient_ids = selected_ingredient_ids.filter(ui => ui.selected)
    selected_ingredient_ids = selected_ingredient_ids.map(ui => ui.id)

    console.log("SELECTED INGREDIENT IDS", selected_ingredient_ids)

    return jwtFetch("POST","generate-recipes", json => dispatch({type: 'SET_RECIPES', payload: json}),{selected_ingredient_ids})
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

export const selectUserIngredient = id => {
  return (dispatch) => {
    dispatch({type:"TOGGLE_SELECT_USER_INGREDIENT", payload: id})
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
