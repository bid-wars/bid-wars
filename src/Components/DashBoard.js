import React, { Component } from 'react'
import DashBoardRouter from './dashBoardRouter'
import {Link} from 'react-router-dom'

 class DashBoard extends Component {
    state ={
        active: 'dashboard',
        dashboard: 'selected',
        bids: 'notactive',
        reports: 'notactive',
        schedule: 'notactive',
        employees: 'notactive',
        nurture: 'notactive',
        
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
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('dashboard')} 
                                className={this.state.dashboard}>
                                Dashboard</li>
                            </Link>
                            <Link to='/bids' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('bids')}
                                className={this.state.bids}
                                >Bids</li>
                            </Link>
                            <Link to='/reports' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('reports')}
                                className={this.state.reports}
                                >Reports</li>
                            </Link>
                            <Link to='/schedule' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('schedule')}
                                className={this.state.schedule}>    
                                Schedule</li>
                            </Link>
                            <Link to='/employees' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('employees')}
                                className={this.state.employees}
                                >Manage Employees</li>
                            </Link>
                            <Link to='/nurture' style={{ textDecoration: 'none' }}>
                                <li onClick={() => this.handleActive('nurture')}
                                className={this.state.nurture}
                                >Nurture Bids</li>
                            </Link>
                        </ul>
                        <div className='bottombuttons'>
                        <Link to='/newbid' style={{ textDecoration: 'none' }}>   
                            <button>Create new bid</button>
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