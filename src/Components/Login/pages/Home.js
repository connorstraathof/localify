import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '@okta/okta-react'

export default withAuth(
  class SignInHome extends Component {
    state = { authenticated: null }

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated()
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated })
      }
    }

    async componentDidMount() {
      this.checkAuthentication()
    }

    async componentDidUpdate() {
      this.checkAuthentication()
    }

    login = async () => {
      this.props.auth.login('/signinhome')
    }

    logout = async () => {
      this.props.auth.logout('/signinhome')
    }

    render() {
      if (this.state.authenticated === null) return null

      const mainContent = this.state.authenticated ? (
        <div>
          <p className='lead'>
            YOU HAVE ENTERED THE LOCALIFY PORTAL, <Link to='/members'>click here</Link>
          </p>
          <button className='btn btn-light btn-lg' onClick={this.logout}>
            LOGOUT
          </button>
        </div>
      ) : (
        <div>
          <p className='lead'>
            IF YOU ARE A MEMBER OF LOCALIFY PLEASE GET YOUR LOG IN CREDENTIALS FROM THE ADMIN
          </p>
          <button className='btn btn-dark btn-lg' onClick={this.login}>
            LOGIN
          </button>
        </div>
      )

      return (
        <div className='jumbotron'>
          <h1 className='display-4'>LOCALIFY MEMBER PORTAL</h1>
          {mainContent}
        </div>
      )
    }
  }
)