import React, { Component } from 'react'
import {connect} from 'react-redux'
import Schedule from './Schedule'
import BidsMadeVSClosed from './Reports/BidsMadeVSClosed'

 class MainDash extends Component {
     

    render() {
     
        return (
            <div className='mainDash'>
                <div className='top'>
                <h1 className='customername'>Welcome back {this.props.firstname}</h1>
               
                </div>
                <div className='bottom'>
                    <div className='leftdiv'>
                        <div className='schedule'>
                            <div className='scheduleBox'>
                                <Schedule/>
                            </div>
                        </div>
                        <div className='bidchart'>
                            <div className='bidchartBox'>
                                <BidsMadeVSClosed/>
                            </div>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <div className='unacceptedBox'>
                            <div className='bidsBox'></div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps)(MainDash)