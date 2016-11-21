import React, { Component, PropTypes } from 'react'

export default class Chat extends Component {

  componentDidMount(){
    if(this.props.connection){
    console.log('from compDM', this.props.connection)
    }
  }
  
  render() {
    const { connection, dispatch, messages } = this.props
    return (
        <div className='row'>
          <div className="container">
            <div className="col-md-6 col-md-offset-3">          
                <div className="form-group row">
                  <div className="col-sm-10">
                    <input ref='chatMessage' className="form-control" placeholder='Message'/>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-2 col-sm-10">
                    <button onClick={(event) => this.handleClick(event)} className="btn btn-primary btn-block">Sign up</button>
                  </div>
                </div>
            </div> 
          </div> 
        </div> 
    )
  }

  handleClick(event) {
    const chatMessage = this.refs.chatMessage
    const creds = { chatMessage: chatMessage.value.trim() }
    this.props.sendMessageClick(creds)
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
}