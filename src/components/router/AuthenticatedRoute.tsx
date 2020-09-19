import * as React from 'react'
import { Redirect, Route } from 'react-router'
import { store } from '../../index'
import { AppState } from '../../reducers'

export const AuthenticatedRoute = ({ children, ...rest }) => {
  const state: AppState = store.getState()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.auth.accessToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
