import React, { Component } from 'react'
import DashBoardRouter from './dashBoardRouter'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCog, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {logOut} from '../redux/ownerReducer'
import axios from 'axios'


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
    logOut = () => {
        this.props.logOut()
        this.props.history.push('/')
    }
    render() {

        return (
            <div className='dashboard'>
                <header>
                    <div className='logo'>
                        <img src='https://bidtracker.s3-us-west-1.amazonaws.com/zsPOb9QgpJQtOSSAMgHPXvRhdbSRNemp-logo.png' alt=""/>
                       
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
                            <button className='newbid' onClick={() => this.handleActive('new bid')} 
                            ><FontAwesomeIcon
                            icon={faPlusCircle}
                            color='#e8e8e8'
                            />NEW BID</button>
                        </Link>
                        <button className='logout' onClick={this.logOut}>Log out</button>
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
function mapStateToProps(state){
    return state
}
export default withRouter(connect(mapStateToProps, {logOut})(DashBoard))