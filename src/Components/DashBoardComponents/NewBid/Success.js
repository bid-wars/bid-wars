import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Success extends Component{
  render(){
    const {values: {contactFirst, contactLast}} = this.props;
    return(
      <div>
        <h1>Whoohoo!</h1>
        <h1>Your bid for {contactFirst} {contactLast} is on it's way!</h1>
        <hr/>
        <button><Link to='/dashboard'>Back To Home</Link></button>
      </div>
    )
  }

}