import CssBaseline from '@material-ui/core/CssBaseline'
import { Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import * as React from 'react'
import { Route, Switch } from 'react-router'

import { Dashboard } from './components/dashboard/dashboard'
import { Header } from './components/header/header'
import { Loader } from './components/loader/loader'
import { Login } from './components/login/login'
import { AuthenticatedRoute } from './components/router/AuthenticatedRoute'
import { theme } from './theme/theme'

interface AppProps {
  loadAppConfig: () => void
}

export const App = () => <ThemeProvider theme={theme}>
  <CssBaseline />
  <Loader>
    <Header />
    <Container>
      <Switch>
        <AuthenticatedRoute exact path='/'>
          <Dashboard />
        </AuthenticatedRoute>
        <Route path='/about'>
          <p>ABOUT US</p>
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Container>
  </Loader>
</ThemeProvider>
