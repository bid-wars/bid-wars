import React, { Component } from 'react'

 class DashBoard extends Component {
    state ={
 
    }

    render() {
        return (
            <div className='dashboard'>
                <header>
                    <div className='logo'>
                        <h2>Jobber</h2>
                    </div>
                    <div className='dashboard'>
                        <h1>Dashboard</h1>
                    </div>
                    <div className='settings'>
                        <h4>company name</h4>
                        <h4>settings</h4>
                    </div>
                </header>
                <main>
                    <nav>
                        <ul>
                            <li>Dashboard</li>
                            <li>Bids</li>
                            <li>Reports</li>
                            <li>Schedule</li>
                            <li>Manage Employees</li>
                            <li>Nurture Bids</li>
                        </ul>
                        <div className='bottombuttons'>
                        <button>Create new bid</button>
                        <button className='logout'>Log out</button>
                        </div>
                    </nav>

                </main>
            </div>
        )
    }
}
export default DashBoard