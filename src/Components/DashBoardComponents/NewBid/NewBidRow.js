import React, {Component} from 'react'

class NewBidRow extends Component {
  state = {
    name: 'Material one',
    description: '',
    unitMeasure: '',
    unitPrice: 0,
    qty: 1,
    extendedPrice: 0
  }
  handleAddItem = (e) => {
    this.props.handleAddItem({
      name: this.state.name,
      description: this.state.description,
      unitMeasure: this.state.unitMeasure,
      unitPrice: this.state.unitPrice,
      qty: this.state.qty
    })
    this.handleClearState();

  }
 
  handleClearState = () => {
    this.setState({
      name: '',
      description: '',
      unitMeasure: '',
      unitPrice: 0,
      qty: 1,

    })
  }

  handleChangeItem = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  calcLineTotal = (e) => {
    this.setState({
      extendedPrice: e
    })
  }

  render(){
    let rowTotal = +this.state.unitPrice * +this.state.qty
    return(
      <>
        {/* <tr>
          <td>1</td>
          <td>Name</td>
          <td>Desc</td>
          <td>Unit Measure</td>
          <td>Unit Price</td>
          <td>Qty</td>
          <td>Extended Price</td>
        </tr> */}
        
        <tr>
          <td>+</td>
          <td><input onChange={this.handleChangeItem} value={this.state.name}type='text' name='name' /></td>
          <td><input onChange={this.handleChangeItem} value={this.state.description}type='text' name='description'/></td>
          <td><input onChange={this.handleChangeItem} value={this.state.unitMeasure}type='text' name='unitMeasure'/></td>
          <td><input onChange={this.handleChangeItem} value={this.state.unitPrice}type='number' name='unitPrice'/></td>
          <td><input onChange={this.handleChangeItem} value={this.state.qty}type='number' name='qty'/></td>
          <td>{rowTotal}</td>
        </tr>

        <button onClick={this.handleAddItem}>Add Item</button>
      </>
    )
  }
}

export default NewBidRow