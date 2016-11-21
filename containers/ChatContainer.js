import React, { Component, PropTypes } from 'react'
import { twitterMessage, streamSearchTerm } from '../actions'
import Chat from '../components/Chat'

class ChatContainer extends Component {
  componentDidMount(){
    let dispatch = this.props.dispatch
    let messages = this.props.messages
    this.props.connection.onmessage = (evnt) => {
      if(!evnt.data.includes("RT") && !messages.includes(evnt.data)){
        var b = evnt.data.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
        dispatch(twitterMessage(messages, b))
      }
    } 
  }

  sendMessage(event, dispatch) {
    dispatch(streamSearchTerm(event.chatMessage))
    this.props.connection.send(event.chatMessage)
  }
  
  render() {
    const { dispatch, connection, searchTerm, messages } = this.props
    let messagesArray = this.props.messages
    return (
      <div className="text-center">
      
        <h4 className="text-xs-center"><small>Live tweets for: </small><strong>{this.props.searchTerm}</strong></h4>
        { messagesArray.length == 0 &&
          <Chat 
            connection={connection}
            dispatch={dispatch} 
            sendMessageClick={ (event) => this.sendMessage(event, dispatch) }
            messages={this.props.messages}
          />
        }
        <br />
        {messagesArray.map(function(item, index){
            if(index == 0){
              return <h5 className="text-xs-center" key={index}>{item}</h5>
            }
            return <p className="text-xs-center" key={index}>{item}</p>
        })}        
      </div>
    )
  }
}

ChatContainer.propTypes = {
  searchTerm: PropTypes.string,
  messages: PropTypes.array,
  dispatch: PropTypes.func.isRequired
}


export default ChatContainer

