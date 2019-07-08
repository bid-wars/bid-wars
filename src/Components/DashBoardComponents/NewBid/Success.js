import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Success extends Component{
  
  

  render(){
    const {values: {contactFirst, contactLast}} = this.props;
    return(
      <div className='new-bid-page'>
        <MuiThemeProvider>
          <FontAwesomeIcon 
            className='icon'
            icon={faPaperPlane}
            size='4x'
            color={'rgba(77, 77, 77, 0.715)'}
          />
          <h1>Whoohoo!</h1>
          <br/>
          <h3>Your bid for {contactFirst} {contactLast} is on it's way!</h3>
          <div className='line'></div>
          <div className='buttons-box'>
            <Link className='butn-primary' to='/dashboard'>Back To Home</Link>
          </div>

        </MuiThemeProvider>
      </div>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}