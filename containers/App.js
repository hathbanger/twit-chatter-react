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
    const { dispatch, wsConn, messages, searchTerm } = this.props
    return (
      <div>
        <Home
          dispatch={dispatch}
          connection={wsConn.connection}
          messages={this.props.messages}
          searchTerm={this.props.searchTerm}
        />
      </div>
    )
  }
}

App.propTypes = {
  searchTerm: PropTypes.string,
  messages: PropTypes.array,
  wsConn: PropTypes.object,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  
  const { connection, twitMsg, wsConn, searchTwit } = state
  const { messages } = twitMsg
  const { searchTerm } = searchTwit
  
  return {
    wsConn,
    twitMsg,
    searchTerm,
    messages,
    connection
  }
}

export default connect(mapStateToProps)(App)

