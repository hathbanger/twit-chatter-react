import React, { Component, PropTypes } from 'react'
import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser, connectWebsocket } from '../actions'

export default class Navbar extends Component {
  
  componentDidMount(){
    console.log('from nav.', this.props)
  }

  render() {
    const { dispatch, connection, isAuthenticated, errorMessage } = this.props
    if(connection){
      console.log('connection', this.props.connection)
    }
    
    return (
      <nav className='navbar navbar-light bg-faded'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">JWT User Login</a>
           <div className='navbar-form form-inline pull-xs-right'>
           
           {!isAuthenticated &&
             <Login
               errorMessage={errorMessage}
               onLoginClick={ creds => dispatch(loginUser(creds)) }
             />
           }
           
           {isAuthenticated &&
             <Logout onLogoutClick={() => dispatch(logoutUser())} />
           }
           
          
         </div>
       </div>
     </nav>
    )
  }

}

Navbar.propTypes = {
  connection: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}