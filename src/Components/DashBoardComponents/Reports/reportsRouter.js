import React from 'react'
import {Switch, Route} from 'react-router-dom'
// import Reports from './Reports'
import BidsMadeVSClosed from './BidsMadeVSClosed'
import QtyClosedByRep from './QtyClosedByRep'

export default (
  <Switch>
      {/* <Route exact path='/dashboard/reports' component={Reports} /> */}
      <Route exact path='/dashboard/reports' component={BidsMadeVSClosed} />
      <Route path='/dashboard/reports/closedbyrep' component={QtyClosedByRep} />
  </Switch>
)