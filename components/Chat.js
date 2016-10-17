import React, { Component, PropTypes } from 'react'

export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	message: "hey"
    };
  }

  sendMsg(connection, message){
  	connection.send(message)
  	this.listenMsg(connection)
  }

  listenMsg(connection){
  	connection.onmessage = (evt) =>
  	{
	   	this.setState({ //the error happens here
	            message: evt.data
	    });
  	}

  }

  onChange(evt) {
    this.props.connection.send(evt.target.value)
  }

  render() {
    const { connection } = this.props
    return (
    	<div>
<div className="list-group">
  <a className="list-group-item list-group-item-action">{this.state.message}</a>
</div>    	
	      <input className="form-control" onChange={this.onChange.bind(this)} type="text" id="example-text-input"/>
	      <button onClick={() => this.sendMsg(connection)} className="btn btn-primary">
	        Send Message
	      </button>
      </div>
    )
  }
  
}


Chat.propTypes = {

  connection: PropTypes.object
}