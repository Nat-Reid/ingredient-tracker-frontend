export const setUser = user => {
  return {
    type: "SET_USER",
    payload: {user}
  }
}

export const setUserIngredients = userIngredients => {
  return {
    type: "SET_USER_INGREDIENTS",
    payload: {userIngredients}
  }
}
