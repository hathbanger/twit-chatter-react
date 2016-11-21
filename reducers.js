import { combineReducers } from 'redux'
import { 
   WS_REQUEST, WS_SUCCESS, WS_FAILURE, TWITMSG_REQUEST, TWITMSG_SUCCESS, TWITMSG_FAILURE
} from './actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.


function wsConn(state = {
    isFetching: false,
    connection: null
  }, action) {
  switch (action.type) {
    case WS_REQUEST:
      console.log('action: requesting websocket:', action)
      return Object.assign({}, state, {
        isFetching: true
      })
    case WS_SUCCESS:
      console.log("WS_SUCCESS!", action.connection)
      return Object.assign({}, state, {
        isFetching: false,
        connection: action.connection
      })
    case WS_FAILURE:
      console.log('requesting websocket: failure:', action)
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: 'failed! '
      })    
    default:
      return state
  }
}

function twitMsg(state = {
    isFetching: false,
    messages: []
  }, action) {
  switch (action.type) {
    case TWITMSG_REQUEST:
      console.log('action: requesting websocket:', action)
      return Object.assign({}, state, {
        isFetching: true
      })
    case TWITMSG_SUCCESS:
      console.log("TWITMSG_SUCCESS!", action)
      return Object.assign({}, state, {
        // isFetching: false,
        connection: action,
        messages: action.messages
      })
    case TWITMSG_FAILURE:
      console.log('requesting websocket: failure:', action)
      return Object.assign({}, state, {
        // isFetching: false,
        errorMessage: 'failed! '
      })    
    default:
      return state
  }
}
// We combine the reducers here so that they
// can be left split apart above
const userLogin = combineReducers({
  twitMsg,
  wsConn
})

export default userLogin