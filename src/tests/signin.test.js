import React from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import 'babel-polyfill'
import {render, fireEvent, cleanup, within} from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from '../App'
import SigninForm from '../components/SigninForm'
import store from '../store.js'

afterEach(cleanup)

const renderWithRedux = (ui, initialState = {}) => render(
  <Provider store={store()}>
    {ui}
  </Provider>
)

  it('user can acces singin page', () => {
    const {getByLabelText, getByText, container} = renderWithRedux(<App />)
    const emailInput = getByLabelText(/email/i)
    const passwordInput = getByLabelText(/password/i)
    const signinForm = container.querySelector('#signin-form')
    const signinButton = within(signinForm).getByText('Signin')
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(signinButton).toBeInTheDocument()
  })

  it('user can singin', () => {
    const handleSubmit = jest.fn()
    const {getByLabelText, getByText, container} = renderWithRedux(<App />)
    const emailInput = getByLabelText(/email/i)
    const passwordInput = getByLabelText(/password/i)
    const signinForm = container.querySelector('#signin-form')
    const signinButton = within(signinForm).getByText(/signin/i)

    signinButton.click()
    expect(handleSubmit).toHaveBeenCalledTimes(1)

  })
