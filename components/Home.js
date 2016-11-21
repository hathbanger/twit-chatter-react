import React, { Component, PropTypes } from 'react'
import ChatContainer from '../containers/ChatContainer'

export default class Home extends Component {
  

  render() {
    const { dispatch,  connection, messages, searchTerm, errorMessage } = this.props
    
    return (
      <div className="container">
        <div className="jumbotron">
          {connection && 
            <div>
              <ChatContainer 
                dispatch={dispatch} 
                connection={connection} 
                messages={this.props.messages}
                searchTerm={this.props.searchTerm} />
            </div>
          }
        </div>
      </div>
    )
  }

}

Home.propTypes = {
  searchTerm: PropTypes.string,
  messages: PropTypes.array,
  connection: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}