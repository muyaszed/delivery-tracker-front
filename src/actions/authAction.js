import * as api from '../api'

export const userSignin = () => {
  return {
    type: 'AUTHENTICATED'
  }
}

export const userSignout = () => {
  return {
    type: 'UNAUTHENTICATED'
  }
}

export const signin = credential => {

  return (dispatch) => {
    return api.userLogin(credential).then((res) => {

      localStorage.setItem('user', res.auth_token)
      dispatch(userSignin())

    })


  }
}
