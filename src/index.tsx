import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { BrowserRouter as Router } from 'react-router-dom'

import { basePath } from './config/api'
import App from './App'
import apolloClient from './services/apolloClient'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router basename={basePath}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()