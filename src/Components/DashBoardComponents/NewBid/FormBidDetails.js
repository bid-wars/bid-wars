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
                <th className='column1'>Line #</th>
                <th className='column2'>Name</th>
                <th className='column3'>Description</th>
                <th className='column4'>Unit Measure</th>
                <th className='column5'>Unit Price</th>
                <th className='column6'>Qty</th>
                <th className='column7'>Extended Price</th>
                <th className='column8'>Action</th>
              </tr>
            </thead>
            <tbody>
                {mappedBidItems}
                <NewBidRow
                  handleAddItem={this.props.handleAddItem}
                />
            </tbody>
          </table>

          <div className='totals-container1'>
            <div className='totals-container2'>
              <div className='totals-column1'>
                <h3>Subtotal:</h3>
                <h3>Less Discount:</h3>
                <h3 className='highlight-text'>Total:</h3>
              </div>
              <div className='totals-column2'>
                <h3>$ {this.props.subtotal}</h3>
                <h3>$ {values.dollarDisc}</h3>
                <div className='totals-underline'>
                  <h3 className='highlight-text'>$ {this.props.invoiceTotal}</h3>
                </div>
              </div>
            </div>
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

