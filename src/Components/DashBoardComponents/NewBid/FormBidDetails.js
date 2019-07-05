import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export default class BidDetails extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
    const {values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Bid Details</h1>

          <h1>Bid Info</h1>
          <TextField
            hintText="Bid Type"
            floatingLabelText="Enter Bid Type"
            onChange={handleChange('bidType')}
            defaultValue={values.bidType}
          />
          <br/>
          <TextField
            type="date"
            label="Expiration Date"
            // hintText="mm/dd/yyyy"
            // floatingLabelText="Expiration Date"
            onChange={handleChange('expirationDate')}
            defaultValue={values.expirationDate}
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
            label="Save & Continue"
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

