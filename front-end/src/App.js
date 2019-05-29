import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom'
import 'firebase/auth'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'
import LogIn from './Components/LogIn'
import Join from './Components/Join/Join'
// import SignUp from './Components/SignUp'
// import PrivateRoute from './PrivateRoute'
import app from './base'
import Grocery from './Components/Grocery/Grocery'
import Cafes from './Components/Cafes/Cafes'
import Artisanal from './Components/Artisanal/Artisanal'
import Artists from './Components/Artists/Artists'
import Shops from './Components/Shops/Shops'
import Food from './Components/Food/Food'

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
          <div className='main__div'>
            <Navigation />

            <Switch>
              {/* <PrivateRoute exact path='/' component={Home} authenticated={authenticated} /> */}
              <Route exact path='/' component={Home}/>
              <Route exact path='/login' component={LogIn} />
              <Route exact path='/join' component={Join} />
              <Route exact path='/grocery' component={Grocery} />
              <Route exact path='/cafes' component={Cafes} />
              <Route exact path='/shops' component={Shops} />
              <Route exact path='/artists' component={Artists} />
              <Route exact path='/artisanal' component={Artisanal} />
              <Route exact path='/food' component={Food} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
