import React from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {render, fireEvent, cleanup, within} from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from '../../App'
import SigninPage from '../SigninPage'
import store from '../../store.js'
import {userSignin} from '../../actions/authAction'

afterEach(cleanup)

const renderWithRedux = (ui, initialState = {}) => {
  const currentStore = store(initialState)
  return {
    ...render(<Provider store={currentStore}><Router>{ui}</Router></Provider>),
    theStore: currentStore
  }
}



describe('Admin visit admin page', () => {
  it('renders admin page', () => {
    const { getByLabelText, getByText, container, queryByText, theStore, debug} = renderWithRedux(<App />)
    const adminPage = queryByText('Admin only')
    const leftClick = {button: 0}
    fireEvent.click(adminPage, leftClick)
    const signinForm = container.querySelector('#signin-form')
    const signinButton = within(signinForm).getByText('Signin')
    expect(getByLabelText(/email/i)).toBeInTheDocument()
    expect(getByLabelText(/password/i)).toBeInTheDocument()
    expect(signinButton).toBeInTheDocument()

    //mocking admin signing in
    const data = {
      email: 'muyaszed@gmail.com',
      password: 'Muyassarah79'
    }
    const token = '123456789'
    const userReqFromApi = jest.fn().mockImplementation(data => {
      return Promise.resolve(token)
    })
    const signin = jest.fn().mockImplementation((data) => {
      return userReqFromApi().then((res) => {
        console.log(res)
        localStorage.setItem('user', res)
        theStore.dispatch(userSignin())
      })
    })

    signin(data).then(() => {
      renderWithRedux(<App />)
      const adminPage = queryByText('Admin only')
      const leftClick = {button: 0}
      fireEvent.click(adminPage, leftClick)

      const adminHeader = queryByText('Admin Page')
      expect(adminHeader).not.toBeNull()
      expect(theStore.getState().authReducer.authenticated).toBeTruthy()
      expect(localStorage.setItem).toHaveBeenLastCalledWith('user', token);
    })

  })


  // it('renders admin page', () => {
  //   const { getByLabelText, getByText, container, queryByText, theStore, debug} = renderWithRedux(<App />)
  //   theStore.dispatch(userSignin())
  //   const adminPage = queryByText('Admin only')
  //   const leftClick = {button: 0}
  //   fireEvent.click(adminPage, leftClick)
  //   const adminHeader = queryByText('Admin Page')
  //
  //   expect(adminHeader).not.toBeNull()
  //   expect(localStorage.)
  //
  // })


})
