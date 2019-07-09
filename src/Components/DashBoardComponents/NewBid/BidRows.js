import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faSave, faWindowClose, faEdit } from '@fortawesome/free-solid-svg-icons';


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
  
  handleStartEdit = () => {
    this.setState({
      editMode: !this.state.editMode,
    })
  }

  handleCancel = () => {
    this.setState({
      editMode: !this.state.editMode,
      name: '',
      description: '',
      unitMeasure: '',
      unitPrice: '',
      qty: ''
    })
  }

  handleUpdateItem = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSaveLine = () => {
    this.props.handleUpdateLine(this.props.index,
      {
        name: this.state.name,
        description: this.state.description,
        unitMeasure: this.state.unitMeasure,
        unitPrice: this.state.unitPrice,
        qty: this.state.qty
      });
    this.handleCancel();
  }

  
  
  render(){
    return(
      <>
        {this.state.editMode ? 
        (<>
        <tr>
          <td>{this.props.index +1}</td>
          <td><input 
            type='text'
            name='name'
            placeholder={this.props.bidRow.name}
            onChange={this.handleUpdateItem}
          /></td>
          <td><input 
            type='text'
            name='description'
            placeholder={this.props.bidRow.description}
            onChange={this.handleUpdateItem}
          /></td>
          <td><input 
            type='text'
            name='unitMeasure'
            placeholder={this.props.bidRow.unitMeasure}
            onChange={this.handleUpdateItem}
          /></td>
          <td><input 
            type='number'
            name='unitPrice'
            placeholder={this.props.bidRow.unitPrice}
            onChange={this.handleUpdateItem}
          /></td>
          <td><input 
            type='number'
            name='qty'
            placeholder={this.props.bidRow.qty}
            onChange={this.handleUpdateItem}
          /></td>
          <td>{+this.state.unitPrice * +this.state.qty}</td>
          <td>
            <FontAwesomeIcon 
              className='icon'
              icon={faWindowClose}
              size='1x'
              color={'rgba(77, 77, 77, 0.715)'}
              onClick={this.handleCancel}
            />
            <FontAwesomeIcon 
              className='icon'
              icon={faSave}
              size='1x'
              color={'rgba(77, 77, 77, 0.715)'}
              onClick={this.handleSaveLine}
            />
          </td>
        </tr>
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
            <th>
              <FontAwesomeIcon 
                className='icon'
                icon={faTrashAlt}
                size='1x'
                color={'rgba(77, 77, 77, 0.715)'}
                onClick={() => this.props.handleDeleteLine(this.props.index)}
              />
              <FontAwesomeIcon 
                className='icon'
                icon={faEdit}
                size='1x'
                color={'rgba(77, 77, 77, 0.715)'}
                onClick={this.handleStartEdit}
              />
            </th>
            
          </tr>
        </>
        )}
      </>
    )
  }
}