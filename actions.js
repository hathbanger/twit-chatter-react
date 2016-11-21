export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export function streamSearchTerm(term){
    return dispatch => {
      dispatch(updateSearchTerm(term))
    }
}

function updateSearchTerm(term){
    return {
      type: SEARCH_SUCCESS,
      searchTerm: term
    }
  
}

function requestSearchTerm(){
    return {
      type: SEARCH_REQUEST
    }
  
}


export const TWITMSG_REQUEST = 'TWITMSG_REQUEST'
export const TWITMSG_SUCCESS = 'TWITMSG_SUCCESS'
export const TWITMSG_FAILURE = 'TWITMSG_FAILURE'



export function twitterMessage(messages, msg){
  console.log('connect', msg)
  if (!msg.includes("RT")){
    if(messages.length > 10){
      messages.pop()
    }
    messages.unshift(msg)
    return dispatch => {
      dispatch(updateMessages(messages))
    }
  } else {
    return {
        type: TWITMSG_FAILURE
      }    
  }
}

function updateMessages(message){
    return {
      type: TWITMSG_SUCCESS,
      messages: message
    }
  
}



export const WS_REQUEST = 'WS_REQUEST'
export const WS_SUCCESS = 'WS_SUCCESS'
export const WS_FAILURE = 'WS_FAILURE'

// Uses the API middlware to get a quote
export function connectWebsocket() {
  let connection = new WebSocket('ws://localhost:1323/ws');
  
  return dispatch => {
    dispatch(updateState(connection))
  }
}

function updateState(connection){
  console.log('connect', connection)
  return {
    type: WS_SUCCESS,
    connection: connection
  }
}