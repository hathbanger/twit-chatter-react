import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { connectWebsocket } from '../actions'
import Home from '../components/Home'

class App extends Component {
  componentDidMount(){
    let dispatch = this.props.dispatch
    dispatch(connectWebsocket())
  }
    
  render() {
    const { dispatch, wsConn, messages } = this.props
    console.log('this.state', messages)
    return (
      <div>
        <Home
          dispatch={dispatch}
          connection={wsConn.connection}
          messages={this.props.messages}
        />
      </div>
    )
  }
}

App.propTypes = {
  messages: PropTypes.array,
  wsConn: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  
  const { connection, twitMsg, wsConn } = state
  const { messages } = twitMsg
  
  return {
    wsConn,
    twitMsg,
    messages,
    connection
  }
}

export default connect(mapStateToProps)(App)

