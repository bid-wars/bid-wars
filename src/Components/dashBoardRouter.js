import React from 'react'
import {Switch, Route} from 'react-router-dom'
import MainDash from './DashBoardComponents/MainDash'
import Bids from './DashBoardComponents/Bids'
import Reports from './DashBoardComponents/Reports/Reports'
import Schedule from './DashBoardComponents/Schedule'
import Employees from './DashBoardComponents/Employees'
import Nurture from './DashBoardComponents/Nurture'
import NewBid from './DashBoardComponents/NewBid'
import Settings from './DashBoardComponents/Settings';

export default (
    <Switch>
        <Route exact path='/dashboard' component={MainDash} />    
        <Route path='/dashboard/bids'   component={Bids} />
        <Route path='/dashboard/reports' component={Reports} />
        <Route path='/dashboard/schedule' component={Schedule} />
        <Route path='/dashboard/employees' component={Employees} />
        <Route path='/dashboard/nurture' component={Nurture} />
        <Route path='/dashboard/newbid' component={NewBid} />
        <Route path='/dashboard/settings' component={Settings}/>


    </Switch>
)