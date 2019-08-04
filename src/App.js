/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Security, ImplicitCallback, SecureRoute } from '@okta/okta-react'
import Navigation from './Components/Navigation/Navigation'
import MainPage from './Components/MainPage/MainPage'
import About from './Components/About/About'
import Join from './Components/JoinPage/JoinPage'
import Footer from './Components/Footer/Footer'
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
import MainComment from './Components/Comment/MainComment'
import LogInPage from './Components/Login/layout/LogInPage'
import Login from './Components/Login/auth/Login'
import Staff from './Components/Login/pages/Staff'
import SignInHome from './Components/Login/pages/Home'
import Submission from './Components/SubmissionPage/SubmissionMain'
// import NotFound from './Components/NotFound/NotFound'

function onAuthRequired({ history }) {
  history.push('/login')
}

const App = props => (
  <Router>
    <div className='main__div'>
      <Navigation />
      <Security
          issuer="https://dev-528253.okta.com/oauth2/default"
          client_id="0oa120xq64iZvDX42357"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
        <Route exact path='/loginpage' component={LogInPage} />
        <Route exact path='/signinhome' component={SignInHome} />
        <SecureRoute exact path='/staff' exact={true} component={Staff} />
        <Route
          exact
          path='/login'
          render={() => <Login baseUrl="https://dev-528253.okta.com" />}
        />
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </Security>
      <Switch>
        <Redirect exact from='/blog/' to='/' />
        {/* <Route component={NotFound} /> */}
        <Route exact path='/' component={MainPage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/join' component={Join} />
        <Route exact path='/comments' component={MainComment} />
        <Route exact path='/submissions' component={Submission} />

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
      <Footer />
    </div>
  </Router>
)

export default App
