import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
    </Switch>
  </main>
)

export default Main
