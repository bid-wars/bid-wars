import React, { Component } from 'react'
import FormClientInfo from './FormClientInfo'
import FormBidDetails from './FormBidDetails'
import Confirm from './Confirm'
import Success from './Success'
import { AsYouType } from 'libphonenumber-js'

export default class NewBid extends Component {
    state = {
        step: 1,
        companyName: '',
        contactFirst: '',
        contactLast: '',
        contactPhone: '',
        contactEmail: '',
        bidType: '',
        expirationDate: '',
        bidTotal: 0,
        sendNote: 'We would love to work for you! Please see that link below to view your bid.',
        bidItems: []
        

    }

    // proceed to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }
    // go back to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }
    // cancel new bid
    cancelForm = () => {
        this.setState({
            step: 1,
            companyName: '',
            contactFirst: '',
            contactLast: '',
            contactPhone: '',
            contactEmail: '',
            bidType: '',
            expirationDate: '',
            bidTotal: 0,
            sendNote: 'We would love to work for you! Please see that link below to view your bid.' 
        })
        this.props.history.push('/dashboard')
    }

    handleAddItem = e => {
        this.setState({
            bidItems: [...this.state.bidItems, e]
        })
        console.log(this.state.bidItems)
      }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    } 

    handleChangePhone = (e) => {
        const phoneTest = new AsYouType('US').input(e.target.value)
        this.setState({
            contactPhone: phoneTest
        })
    }
    
    render() {
        const{ step } = this.state;
        const { companyName, contactFirst, contactLast, contactPhone, contactEmail, bidType, expirationDate, bidTotal, sendNote} = this.state;
        const values = { companyName, contactFirst, contactLast, contactPhone, contactEmail, bidType, expirationDate, bidTotal, sendNote}
        
        const invoiceTotal = this.state.bidItems.reduce((total, element) =>{
            return total += (element.unitPrice * element.qty)
        }, 0)

        switch(step) {
            case 1:
                return(
                    <FormClientInfo
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleChangePhone={this.handleChangePhone}
                        values={values}
                        cancelForm={this.cancelForm}
                    />
                )
            case 2:
                return(
                    <FormBidDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        handleAddItem={this.handleAddItem}
                        bidItems={this.state.bidItems}
                        invoiceTotal={invoiceTotal}
                    />
                )
            case 3: 
                return(
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return(
                    <Success
                        values={values}
                    />
                )
        }
        return (
            <div>
                <h1>new bids</h1>
            </div>
        )
    }
}
