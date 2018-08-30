import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import Thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'

const store = state => createStore(rootReducer, state, applyMiddleware(Thunk))

export default store
