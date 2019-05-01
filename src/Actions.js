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

export const setUser = () => {
  return (dispatch) => {
    dispatch(setUserIngredients())
    dispatch({type: 'START_USER_REQUEST'})
    return jwtFetch("GET","profile", json => dispatch({type: 'SET_USER', payload: json.user}))
    // {user: {username: "", name: ""}}
  };
}

export const setUserIngredients = () => {
  return (dispatch) => {
    dispatch({type: 'START_USER_INGREDIENT_REQUEST'})
    return jwtFetch("GET","user_ingredients", json => dispatch({type: 'SET_USER_INGREDIENTS', payload: json}))
    // [{name: "", expiration_date: ...}, {}, {}]
  };
}

export const deleteUserIngredient = id => {
  return (dispatch) => {
    return jwtFetch("DELETE",`user_ingredients/${id}`, ({id}) => dispatch({type: 'DELETE_USER_INGREDIENT', payload: id}))
  }
}
