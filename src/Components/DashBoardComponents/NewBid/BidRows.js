import React, {Component} from 'react'

export default class BidRows extends Component{
  constructor(){
    super()
    this.state = {
      editMode: false,
      name: '',
      description: '',
      unitMeasure: '',
      unitPrice: '',
      qty: ''
    }
  }
  
  
  render(){
    console.log('all props', this.props)
    return(
      <>
        {this.state.editMode ? 
        (<>
        </>):(
        <>
          <tr>
            <th>{this.props.index +1}</th>
            <th>{this.props.bidRow.name}</th>
            <th>{this.props.bidRow.description}</th>
            <th>{this.props.bidRow.unitMeasure}</th>
            <th>{this.props.bidRow.unitPrice}</th>
            <th>{this.props.bidRow.qty}</th>
            <th>{+this.props.bidRow.unitPrice * +this.props.bidRow.qty}</th>
          </tr>
        </>
        )}
      </>
    )
  }
}