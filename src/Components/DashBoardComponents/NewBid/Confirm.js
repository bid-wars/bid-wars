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
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Confirm and Send</h1>
          <h1>Message Details</h1>
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
              secondaryText={ bidTotal }
            />
          </List>
          <h1>Add a Note:</h1>
          <input
            // hintText="Bid Type"
            // floatingLabelText="Enter Bid Type"
            onChange={handleChange('sendNote')}
            defaultValue={sendNote}
          />
          <br/>

          <hr/>
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label="Send Bid"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

