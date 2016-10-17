import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import userLogin from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import api from './middleware/api'


const logger = createLogger()

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api, logger)(createStore)

let store = createStoreWithMiddleware(userLogin)

let rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

