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
      <div className='new-bid-page'>
      <MuiThemeProvider>
        <React.Fragment>
          <div className='form'>
            <h3>Client Info</h3>

            <div className='form-content'>
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
                floatingLabelText="Email"
                onChange={handleChange('contactEmail')}
                defaultValue={values.contactEmail}
              />
            </div>
          </div>
          <div className='line'>
          </div>  
          <div className='buttons-box'>
            <br/>
            <button 
              className='butn-negative'
              onClick={this.cancel} 
              >Cancel
            </button>
            <button 
              className='butn-primary'
              onClick={this.continue} 
              >Save & Continue
            </button>
          </div>

          
        </React.Fragment>
      </MuiThemeProvider>
      </div>
    )
  }
}



