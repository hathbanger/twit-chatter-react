import React, { Component, PropTypes } from 'react'

export default class Home extends Component {
  

  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>hello from home!</h1>
        </div>
      </div>
    )
  }

}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}