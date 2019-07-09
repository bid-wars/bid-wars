import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import NewBidRow from './NewBidRow'
import BidRows from './BidRows';

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
    let mappedBidItems = this.props.bidItems.map((element, index) => {
      return(
        <BidRows
          bidRow={element}
          key={index}
          index={index}
          handleDeleteLine={this.props.handleDeleteLine}
          handleUpdateLine={this.props.handleUpdateLine}
        />
      )
    })
    return (
      <div className='new-bid-page'>
      <MuiThemeProvider>
        <React.Fragment>
          <h1>Bid Details</h1>
          <div className='form'>
            <h3>Bid Info</h3>
            <div className='form-content'>
              <TextField
                hintText="Bid Type"
                floatingLabelText="Enter Bid Type"
                onChange={handleChange('bidType')}
                defaultValue={values.bidType}
              />
              <br/>
              <TextField
                hintText="Discount Amount"
                floatingLabelText="Enter Discount Amount"
                onChange={handleChange('dollarDisc')}
                defaultValue={values.dollarDisc}
              />
              <br/>
              <TextField
                type="date"
                floatingLabelText="Expiration Date"
                label="Expiration Date"
                // hintText="mm/dd/yyyy"
                // floatingLabelText="Expiration Date"
                onChange={handleChange('expirationDate')}
                defaultValue={values.expirationDate}
              />
              <br/>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Line #</th>
                <th>Name</th>
                <th>Description</th>
                <th>Unit Measure</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Extended Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                {mappedBidItems}
                <NewBidRow
                  handleAddItem={this.props.handleAddItem}
                />
            </tbody>
          </table>

          <h1>Subtotal: {this.props.subtotal}</h1>
          <h1>Less Discount: {values.dollarDisc}</h1>
          <h1>Total: {this.props.invoiceTotal}</h1>


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
              >Save & Continue
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

