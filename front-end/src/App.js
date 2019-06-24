import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import 'firebase/auth'
import Navigation from './Components/Navigations/Navigation/Navigation'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Comments from './Components/Comments/MainComment'
import Join from './Components/JoinPage/JoinPage'
import Footer from './Components/Footer/Footer'
// import SignUp from './Components/SignUp'
import Grocery from './Components/ShopsAll/Grocery/Grocery'
import Grocer from './Components/ShopsAll/Grocery/Grocer'
import Cafes from './Components/ShopsAll/Cafes/Cafes'
import Cafe from './Components/ShopsAll/Cafes/Cafe'
import Drinks from './Components/ShopsAll/Drinks/Drinks'
import Drink from './Components/ShopsAll/Drinks/Drink'
import Artist from './Components/ShopsAll/Artists/Artist'
import Artists from './Components/ShopsAll/Artists/Artists'
import Shops from './Components/ShopsAll/Shops/Shops'
import Shop from './Components/ShopsAll/Shops/Shop'
import Foods from './Components/ShopsAll/Food/Foods'
import Food from './Components/ShopsAll/Food/Food'
// import NotFound from './Components/NotFound/NotFound'

const App = props => (
  <Router>
    <div className='main__div'>
      <Navigation />
      <Switch>
        <Redirect exact from='/blog/' to='/' />
        {/* <Route component={NotFound} /> */}
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/comments' component={Comments} />
        <Route exact path='/join' component={Join} />
        <Route
          exact
          path='/artists'
          render={routeProps => <Artists {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/artists/:uid'
          render={routeProps => <Artist {...routeProps} prismicCtx={props.prismicCtx} />}
        />
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
        <Route
          exact
          path='/drinks'
          render={routeProps => <Drinks {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/drinks/:uid'
          render={routeProps => <Drink {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/food'
          render={routeProps => <Foods {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        <Route
          exact
          path='/food/:uid'
          render={routeProps => <Food {...routeProps} prismicCtx={props.prismicCtx} />}
        />
        {/* <Route exact path='/navside' component={NavSide}/> */}
      </Switch>
      <Footer/>
    </div>
  </Router>
)

export default App
