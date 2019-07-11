import React, { Component } from 'react'
import DashBoardRouter from './dashBoardRouter'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCog, faPlusCircle, faRocket} from '@fortawesome/free-solid-svg-icons'
import {logOut} from '../redux/ownerReducer'
import Boom from './Boom';
import '../styling/schedule.css'



 class DashBoard extends Component {
    state ={
        active: 'dashboard',
        dashboard: 'selected',
        bids: 'notactive',
        reports: 'notactive',
        schedule: 'notactive',
        employees: 'notactive',
        fireworks: false
        
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
    onFireWorks = () =>{
        this.setState({
            fireworks: !this.state.fireworks
        })
    }
    render() {
        console.log(this.props)

        return (
            <div className='dashboard'>
               {this.state.fireworks && <><Boom/></>}

                <header>
                    <div className='logo'>
                        <img src='https://bidtracker.s3-us-west-1.amazonaws.com/Da5UHE34nlKosYUztHDgJ4DD7J0c4Z0f-text939-1.png' alt=""/>
                       
                    </div>
                    <div className='title'>
                        <h1>{this.state.active}</h1>
                    </div>
                    <div className='settings'>
                        <div className='companyname'>
                        <h4>{this.props.companyName}</h4>
                        </div>
                        
                        <img src={this.props.logo} alt=""/>
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
                        {/* <FontAwesomeIcon 
                        onClick={this.onFireWorks}
                        icon={faRocket}
                        /> */}
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