const initialState = {
  authenticated: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':

      return {...state, authenticated: true}
    case 'UNAUTHENTICATED':
      return {...state, authenticated: false}
    case 'AUTHENTICATION_ERROR':
      return {...state, error: action.payload}
    default:
      return state
  }
}

export default authReducer
