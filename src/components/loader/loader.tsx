import * as React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../reducers'

interface LoaderProps {
  children: any
  ready: boolean
}

const loader = (props: LoaderProps) => <>
  {props.ready && props.children}
  {!props.ready && <p>Loading</p>}
</>

export const Loader = connect(
  (state: AppState) => ({
    ready: state.bootstrap.ready
  })
)(loader)
