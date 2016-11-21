import React, { Component, PropTypes } from 'react'
import ChatContainer from '../containers/ChatContainer'

export default class Home extends Component {
  

  render() {
    const { dispatch,  connection, messages, errorMessage } = this.props
    console.log('this.state', this.state)
    
    return (
      <div className="container">
        <div className="jumbotron">
          {connection && 
            <div>
              <ChatContainer 
                dispatch={dispatch} 
                connection={connection} 
                messages={this.props.messages} />
            </div>
          }
        </div>
      </div>
    )
  }

}

Home.propTypes = {
  messages: PropTypes.array,
  connection: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}