import React, { Component, PropTypes } from 'react'

import Chat from './Chat'
import { connectWebsocket } from '../actions'

export default class Home extends Component {
  

  render() {
    const { dispatch, connection, isAuthenticated, errorMessage } = this.props
    return (
      <div className="container">
        <div className="jumbotron">
              <Chat connection={this.props.connection} />
        </div>
      </div>
    )
  }

}

Home.propTypes = {
  connection: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}