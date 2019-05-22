import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
