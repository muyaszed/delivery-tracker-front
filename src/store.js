import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import Thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer'

const store = state => createStore(rootReducer, state, composeWithDevTools(applyMiddleware(Thunk)))

export default store
