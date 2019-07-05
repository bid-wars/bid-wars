import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


export default class FormClientInfo extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  cancel = e => {
    e.preventDefault();
    this.props.cancelForm();
  }
  
  render(){
    const {values, handleChange, handleChangePhone} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>

          <h1>Get Started</h1>
          <h1>Client Info</h1>
          <br/>
          <TextField
            hintText="Company Name"
            floatingLabelText="Company Name (if applicable)"
            onChange={handleChange('companyName')}
            defaultValue={values.companyName}
          />
          <br/>
          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            onChange={handleChange('contactFirst')}
            defaultValue={values.contactFirst}
          />
          <br/>
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange('contactLast')}
            defaultValue={values.contactLast}
          />
          <br/>
          {/* <input
            type="tel"
            name="contactPhone"
            value={values.contactPhone}
            onChange={handleChangePhone}
            // hintText="Phone"
            // floatingLabelText="Phone"
            // onChange={handleChangePhone}
            // defaultValue={values.contactPhone}
          />
          <br/> */}

          <TextField
            type="tel"
            name="contactPhone"
            value={values.contactPhone}
            onChange={handleChangePhone}
            hintText="Phone"
            floatingLabelText="Phone"
          />
          <br/>

          <TextField
            hintText="Email"
            floatingLabelText="Email"
            onChange={handleChange('contactEmail')}
            defaultValue={values.contactEmail}
          />

          <hr/>
          <br/>
          <RaisedButton
            label="Cancel"
            primary={false}
            style={styles.button}
            onClick={this.cancel}
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

