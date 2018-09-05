import React from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {render, fireEvent, cleanup, within} from 'react-testing-library'
import 'jest-dom/extend-expect'
import App from '../../App'
import store from '../../store.js'


afterEach(cleanup)

const renderWithRedux = (ui, initialState = {}) => {
  const currentStore = store(initialState)
  return {
    ...render(<Provider store={currentStore}><Router>{ui}</Router></Provider>),
    theStore: currentStore
  }
}

describe('User', () => {

  describe('visit hompage', () => {

    it('render tracking page', () => {
      const {getByLabelText, getByText, container, queryByText, theStore, debug} = renderWithRedux(<App />)
      const trackingNumberInput = getByLabelText(/tracking number/i)
      const trackingForm = container.querySelector('#tracking-form')
      const trackingButton = within(trackingForm).getByText(/track/i)
      expect(trackingNumberInput).toBeInTheDocument()
      expect(trackingButton).toBeInTheDocument()
    })
  })

  describe('visit admin page', () => {

    test('should render signin page', () => {
      const {getByLabelText, getByText, container, queryByText, theStore, debug} = renderWithRedux(<App />)
      const adminPage = queryByText('Admin only')
      const leftClick = {button: 0}
      fireEvent.click(adminPage, leftClick)
      const signinForm = container.querySelector('#signin-form')
      const signinButton = within(signinForm).getByText('Signin')
      expect(getByLabelText(/email/i)).toBeInTheDocument()
      expect(getByLabelText(/password/i)).toBeInTheDocument()
      expect(signinButton).toBeInTheDocument()
    })

    test('should not render admin page', () => {
      const {getByLabelText, getByText, container, queryByText, theStore, debug} = renderWithRedux(<App />)
      const adminPage = queryByText('Admin only')
      const leftClick = {button: 0}
      fireEvent.click(adminPage, leftClick)
      const adminPageHeader = queryByText('Admin Page')
      expect(adminPageHeader).toBeNull()

    })
  })


})
