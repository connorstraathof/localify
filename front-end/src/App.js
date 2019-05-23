import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import 'firebase/auth'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
// import PrivateRoute from './PrivateRoute'
import app from './base'

class App extends Component {
  state = { loading: true, authenticated: false, user: null }

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        })
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        })
      }
    })
  }

  render() {
    const { authenticated, loading } = this.state

    if (loading) {
      return <p>Loading..</p>
    }

    return (
      <div>
        <BrowserRouter>
          <div>
            <Navigation />

            <Switch>
              {/* <PrivateRoute exact path='/' component={Home} authenticated={authenticated} /> */}
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={LogIn} />
              <Route exact path='/signup' component={SignUp} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
