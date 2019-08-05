import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Redirect, Route, Switch } from 'react-router-dom'

import theme from './config/theme'
import { baseUrl, basePath, apiUrl, fileUrl, wsUrl } from './config/api'
import { expensesRoute } from './config/routes'
import AppHeader from './components/AppLayout'
import ExpensesView from './components/ExpensesView'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <AppHeader />
    <main
      data-base-url={baseUrl}
      data-base-path={basePath}
      data-api-url={apiUrl}
      data-file-url={fileUrl}
      data-ws-url={wsUrl}
    >
      <Switch>
        <Route path={expensesRoute()} component={ExpensesView} exact={true} />

        <Redirect to={expensesRoute()} />
      </Switch>
    </main>
  </MuiThemeProvider>
)

export default App
