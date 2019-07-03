import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './Components/Home'
import LogInForm from './Components/LogInForm'
import Register from './Components/Register'
import DashBoard from './Components/DashBoard'

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={LogInForm}/>
        <Route path='/register' component={Register}/>
        <Route path='/dashboard' component={DashBoard}/>
    </Switch>
)