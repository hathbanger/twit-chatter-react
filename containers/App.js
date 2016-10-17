import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loginUser, connectWebsocket } from '../actions'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

class App extends Component {

  componentDidMount(){
    let dispatch = this.props.dispatch
    dispatch(connectWebsocket())
  }
  
  render() {
    const { dispatch, wsConn,  isAuthenticated, errorMessage } = this.props

    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
          connection={wsConn.connection}
        />
        <Home
          dispatch={dispatch}
          connection={wsConn.connection}
          isAuthenticated={isAuthenticated}
        />
      </div>
    )
  }
}

App.propTypes = {
  wsConn: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

function mapStateToProps(state) {
  
  const { auth, connection, wsConn } = state
  const { isAuthenticated, errorMessage } = auth
  
  return {
    wsConn,
    connection,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)

