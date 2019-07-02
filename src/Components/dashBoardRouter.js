import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MainDash from './DashBoardComponents/MainDash'
import Bids from './DashBoardComponents/Bids'
import Reports from './DashBoardComponents/Reports'
import Schedule from './DashBoardComponents/Schedule'
import Employees from './DashBoardComponents/Employees'
import Nurture from './DashBoardComponents/Nurture'
import NewBid from './DashBoardComponents/NewBid'

export default (
    <Switch>
        <Route exact path='/' component={MainDash} />    
        <Route path='/bids'   component={Bids} />
        <Route path='/reports' component={Reports} />
        <Route path='/schedule' component={Schedule} />
        <Route path='/employees' component={Employees} />
        <Route path='/nurture' component={Nurture} />
        <Route path='/newbid' component={NewBid} />

    </Switch>
)