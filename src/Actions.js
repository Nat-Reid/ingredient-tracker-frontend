function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.message);
    }
    return response;
}

function jwtFetch(method, endpoint, callback){
  return fetch(`http://localhost:3000/${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("IngredientTrackerToken")}`
    }
  })
  .then(handleErrors)
  .then(response => {
    return response.json()
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

export const findIngredient = (searchString) => {
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
