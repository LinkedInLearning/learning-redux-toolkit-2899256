import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './data/store'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
