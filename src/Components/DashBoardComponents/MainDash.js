import React, { Component } from 'react'

export default class MainDash extends Component {
    render() {
        return (
            <div className='mainDash'>
                <div className='top'>
                <h1 className='customername'>Welcome back Bilbo</h1>
               
                </div>
                <div className='bottom'>
                    <div className='leftdiv'>
                        <div className='schedule'>
                            <h1>Appointments Today</h1>
                            <div className='scheduleBox'></div>
                        </div>
                        <div className='bidchart'>
                            <h1>Bids Made VS. Closed</h1>
                            <div className='bidchartBox'></div>
                        </div>
                    </div>
                    <div className='rightdiv'>
                        <div className='unacceptedBox'>
                            <h1>Unaccepted Bids</h1>
                            <div className='bidsBox'></div>
                        </div>
                    </div>
                </div>
            
            </div>
        )
    }
}
