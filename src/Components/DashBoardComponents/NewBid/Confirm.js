import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List'


export default class BidDetails extends Component{
  continue = e => {
    e.preventDefault();
    //Process form - ie send data here to server
    this.props.nextStep();
  }
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
    const {values: {contactEmail, contactFirst, contactLast, expirationDate, bidTotal, sendNote}, handleChange} = this.props;
    return (
      <div className='new-bid-page'>
        <MuiThemeProvider>
          <React.Fragment>
            <h1>Confirm and Send</h1>
            <div className='form'>
              <h3>Message Details</h3>
              <div className='form-content'>
                <List>
                  <ListItem
                    primaryText="Email:"
                    secondaryText={ contactEmail }
                  />
                  <ListItem
                    primaryText="Name:"
                    ////////////////////////// need to add first and last
                    secondaryText={ contactFirst }
                  />
                  <ListItem
                    primaryText="Bid Expiration Date:"
                    secondaryText={ expirationDate }
                  />
                  <ListItem
                    primaryText="Bid Total:"
                    secondaryText={ this.props.invoiceTotal }
                  />
                </List>
              </div>
            </div>

            <div className='form'> 
              <h3>Add a Note:</h3>
              {/* <div className='form-content'> */}
                <textarea className='message-input'
                  // hintText="Bid Type"
                  // floatingLabelText="Enter Bid Type"
                  onChange={handleChange('sendNote')}
                  defaultValue={sendNote}
                />
              {/* </div> */}
            </div>

            <div className='line'></div>
            <div className='buttons-box'>
              <button 
                className='butn-negative'
                onClick={this.back} 
                >Back
              </button>
              <button 
                className='butn-primary'
                onClick={this.continue} 
                >Send Bid
              </button>
            </div>
            
          </React.Fragment>
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

