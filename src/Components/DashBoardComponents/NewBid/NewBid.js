import React, { Component } from 'react'
import FormClientInfo from './FormClientInfo'
import FormBidDetails from './FormBidDetails'
import Confirm from './Confirm'
import Success from './Success'
import { AsYouType } from 'libphonenumber-js'
import axios from 'axios'

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
        bidItems: [],
        dollarDisc: ''
    }


    // submit form
    handleSendBid = () => {
        const toEmail = this.state.contactEmail
        const emailBody = `
            <h1>${this.state.sendNote}</h1>
            `
        axios.post('/bids/add', {
            //customer info
            companyName: this.state.companyName,
            contactFirst: this.state.contactFirst,
            contactLast: this.state.contactLast,
            contactPhone: this.state.contactPhone,
            contactEmail: this.state.contactEmail,
            // bid info
            bidType: this.state.bidType,
            expirationDate: this.state.expirationDate,
            bidItems: this.state.bidItems,
            dollarDisc: this.state.dollarDisc
        })
        .then('/nodemailer/send', {toEmail, emailBody})
        .then(this.nextStep())
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
            bidTotal: '',
            sendNote: 'We would love to work for you! Please see that link below to view your bid.' ,
            bidItems: [],
            dollarDisc: ''
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

    handleDeleteLine = (index) => {
        let newBidItems = [...this.state.bidItems]
        newBidItems.splice(index, 1)
        this.setState({bidItems: newBidItems})
    }

    handleUpdateLine = (index, updateRow) => {
        let newBidItems = [...this.state.bidItems]
        newBidItems.splice(index, 1, updateRow)
        this.setState({bidItems: newBidItems})
    }
    
    render() {
        const{ step } = this.state;
        const { companyName, contactFirst, contactLast, contactPhone, contactEmail, bidType, expirationDate, bidTotal, sendNote, dollarDisc} = this.state;
        const values = { companyName, contactFirst, contactLast, contactPhone, contactEmail, bidType, expirationDate, bidTotal, sendNote, dollarDisc}
        
        const subtotal = this.state.bidItems.reduce((total, element) =>{
            return total += (element.unitPrice * element.qty)
        }, 0)
        const invoiceTotal = this.state.bidItems.reduce((total, element) =>{
            return total += (element.unitPrice * element.qty)
        }, 0) - this.state.dollarDisc
        console.log('updated bid items:', this.state.dollarDisc)

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
                        subtotal={subtotal}
                        invoiceTotal={invoiceTotal}
                        handleDeleteLine={this.handleDeleteLine}
                        handleUpdateLine={this.handleUpdateLine}
                    />
                )
            case 3: 
                return(
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        invoiceTotal={invoiceTotal}
                        handleSendBid={this.handleSendBid}
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
