import React, { Component } from 'react'
import DashBoardRouter from './dashBoardRouter'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCog, faClipboardList} from '@fortawesome/free-solid-svg-icons'

 class DashBoard extends Component {
    state ={
        active: 'dashboard',
        dashboard: 'selected',
        bids: 'notactive',
        reports: 'notactive',
        schedule: 'notactive',
        employees: 'notactive',
        nurture: 'notactive'
       
    }
    handleActive = (e) =>{
 
        let current = this.state.active
        if(e === current){
            return
        }else{
            this.setState({
                [current]: 'notactive'
            })
             if(this.state.active !== e){
                this.setState({
                    active: e,
                    [e]: 'selected'
                })
            }
        }
        
    }
    render() {

        return (
            <div className='dashboard'>
                <header>
                    <div className='logo'>
                        <FontAwesomeIcon
                        icon={faClipboardList}
                        size='3x'
                        />
                        <h1>Jobber</h1>
                    </div>
                    <div className='title'>
                        <h1>{this.state.active}</h1>
                    </div>
                    <div className='settings'>
                        <h4>company name</h4>
                        <Link className='link'
                        to='/dashboard/settings'>
                            <FontAwesomeIcon 
                            icon={faUserCog}
                            color='#F9F9F9'
                            onClick={() => this.handleActive('settings')} 
                            />
                        </Link>
                    </div>
                </header>
                <main>
                    <nav>
                        <ul>
                            <Link to='/dashboard' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('dashboard')} 
                                className={this.state.dashboard}>
                                Dashboard</li>
                            </Link>
                            <Link to='/dashboard/bids' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('bids')}
                                className={this.state.bids}
                                >Bids</li>
                            </Link>
                            <Link to='/dashboard/reports' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('reports')}
                                className={this.state.reports}
                                >Reports</li>
                            </Link>
                            <Link to='/dashboard/schedule' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('schedule')}
                                className={this.state.schedule}>    
                                Schedule</li>
                            </Link>
                            <Link to='/dashboard/employees' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('employees')}
                                className={this.state.employees}
                                >Manage Employees</li>
                            </Link>
                            <Link to='/dashboard/nurture' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('nurture')}
                                className={this.state.nurture}
                                >Nurture Bids</li>
                            </Link>
                        </ul>
                        <div className='bottombuttons'>
                        <Link to='/dashboard/newbid' style={{ textDecoration: 'none' }}>   
                            <button onClick={() => this.handleActive('new bid')} 
                            >Create new bid</button>
                        </Link>
                        <button className='logout'>Log out</button>
                        </div>
                    </nav>
                    <div className='routedisplay'>
                        {DashBoardRouter}
                    </div>
                </main>
            </div>
        )
    }
}
export default DashBoard