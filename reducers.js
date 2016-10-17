import { combineReducers } from 'redux'
import { 
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS,
  WS_REQUEST, WS_SUCCESS, WS_FAILURE
} from './actions'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
function auth(state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
  }, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        // all_fish: action.all_fish,
        errorMessage: ''
      })
    case LOGIN_FAILURE:

      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
    }
}

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
// We combine the reducers here so that they
// can be left split apart above
const userLogin = combineReducers({
  auth,
  wsConn
})

export default userLogin