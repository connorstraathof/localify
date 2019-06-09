import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'firebase/auth'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'
import LogIn from './Components/LogIn'
import Join from './Components/Join/Join'
// import SignUp from './Components/SignUp'
import Grocery from './Components/Grocery/Grocery'
import Grocer from './Components/Grocery/Grocer'
import Cafes from './Components/Cafes/Cafes'
import Cafe from './Components/Cafes/Cafe'
import Artisanal from './Components/Artisanal/Artisanal'
import Artists from './Components/Artists/Artists'
import Shops from './Components/Shops/Shops'
import Shop from './Components/Shops/Shop'
import Food from './Components/Food/Food'
import NotFound from './Components/NotFound/NotFound'

const App = props => (
  <Router>
    <div className='main__div'>
      <Navigation />
      <Switch>
        <Redirect exact from='/blog/' to='/' />
        {/* <Route component={NotFound} /> */}
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/cafes'
          render={routeProps => <Cafes {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/cafes/:uid'
          render={routeProps => <Cafe {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route exact path='/login' component={LogIn} />
        <Route exact path='/join' component={Join} />
        <Route
          exact
          path='/grocery'
          render={routeProps => <Grocery {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/grocery/:uid'
          render={routeProps => <Grocer {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/shops'
          render={routeProps => <Shops {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/shops/:uid'
          render={routeProps => <Shop {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route exact path='/artists' component={Artists} />
        <Route exact path='/artisanal' component={Artisanal} />
        <Route exact path='/food' component={Food} />
      </Switch>
    </div>
  </Router>
)

export default App
