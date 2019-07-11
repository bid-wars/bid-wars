import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {faChartBar, faAddressBook, faPaperPlane, faClipboardList, faCalendarDay} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Home extends Component {
    state = {
        iconColorActive: '#3454D1',
        iconColorNotActive: '#4d4d4d',
        activeIcon: 'clipboard',
        clipboard: 'active',
        chart: 'notactive',
        contact: 'notactive',
        mail: 'notactive',
        calendar: 'notactive'
    }
    onClick = (e) => {
        let current = this.state.activeIcon
        if(e === current){
            return
        }else{
            this.setState({
                [current]: 'notactive'
            })
             if(this.state.activeIcon !== e){
                this.setState({
                    activeIcon: e,
                    [e]: 'active'
                })
            }
        }
    }
 
    render() {
        const {clipboard, chart, contact, mail, calendar, iconColorActive, iconColorNotActive, activeIcon} = this.state
        return (
            <div className='homePage'>
                <div className='topbanner'>
                    
                        <img className='logo' src='https://bidtracker.s3-us-west-1.amazonaws.com/Da5UHE34nlKosYUztHDgJ4DD7J0c4Z0f-text939-1.png' alt=""/>
                    <div className='links'>
                        <Link className='link' to='/register' >Register</Link>
                        <Link to='/login' className='link' >Login</Link>
                    </div>
                </div>
                <div className='navholder'>
                    <div className='topnav'>
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faClipboardList}
                        size='4x'
                        color={clipboard === 'active'? iconColorActive : iconColorNotActive}
                        onClick={() => this.onClick('clipboard')}
                        
                    />    
                    <FontAwesomeIcon
                        className='icon'
                        icon={faChartBar}
                        size='4x'
                        color={chart === 'active'? iconColorActive : iconColorNotActive}
                        onClick={() => this.onClick('chart')}
                    />
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faAddressBook}
                        size='4x'
                        color={contact === 'active'? iconColorActive : iconColorNotActive}
                        onClick={() => this.onClick('contact')}
                    />
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faPaperPlane}
                        size='4x'
                        color={mail === 'active'? iconColorActive : iconColorNotActive}
                        onClick={() => this.onClick('mail')}
                    />
                    <FontAwesomeIcon 
                        className='icon'
                        icon={faCalendarDay}
                        size='4x'
                        color={calendar === 'active'? iconColorActive : iconColorNotActive}
                        onClick={() => this.onClick('calendar')}
                        
                    />  
                    </div>
                    <div className='bottomnav'>
                        <div className='left'>
                        {
                            activeIcon === 'clipboard'? 
                            <div>
                                <h3>Spend less time doing paperwork and more time selling.</h3>
                                <h3>Make your bidding process more streamlined by making it paperless.</h3>
                                <h3>Register today!</h3>
                                <Link className='link' to='/register' >Register</Link>
                                
                            </div> :
                            activeIcon === 'chart' ?
                            <div>
                                 <h3>Track the bids that your sells force is making, and see who your big performers are.</h3>
                                
                                <h3>Register today!</h3>
                                <Link className='link' to='/register' >Register</Link>
                            </div>:
                            activeIcon === 'contact' ?
                            <div>
                                <h3>Manage your employees.</h3>
                                
                                <h3>Register today!</h3>
                                <Link className='link' to='/register' >Register</Link>
                            </div>:
                            activeIcon === 'mail' ?
                            <div>
                                <h3>Send paperless bids for your customers to review.</h3>
                                
                                <h3>Register today!</h3>
                                <Link className='link' to='/register' >Register</Link>
                            </div>: 
                            activeIcon === 'calendar' ?
                            <div>
                                <h3>Keep track of your upcoming appointments with build in scheduler.</h3>
                                
                                <h3>Register today!</h3>
                                <Link className='link' to='/register' >Register</Link>
                            </div>: null   
                        }
                
                        </div>
                        <div className='right'>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
