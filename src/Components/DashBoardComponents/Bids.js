import React, { Component } from 'react'
import axios from 'axios'
import DateFormat from 'fast-date-format'

export default class Bids extends Component {
    state = {
        bids: [],
        itemsView: [],
        itemsSwitch: false
    }
componentDidMount(){
    axios.get('/bids/all').then(res => {
        console.log(res.data)
        this.setState({bids: res.data})})
}
// company_id: 3
// customer_id: 1
// date: "1562565600000"
// discount: 2387
// email: "w@w.com"
// exp_date: "1563494400000"
// firstname: "Bob"
// id: 36
// items: [{…}]
// lastname: "Builder"
// name: "sflkj"
// number: "(324) 242-3423"
// salesman_id: 1
// status: "closed"
// type: "sdf"
    viewItems = (i) => {
        console.log('hit')
        this.setState({
            itemsSwitch: !this.state.itemsSwitch,
            itemsView: this.state.bids[i].items        
        })
    }
    cancel = () => {
        this.setState({
            itemsSwitch: !this.state.itemsSwitch
        })
    }

    render() {
        let itemsOnView = this.state.itemsView.map(item => {
  
            return (
                <tr>
                <td>{item.qty}</td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
                <td>{item.description}</td>
                <td>{item.unitMeasure}</td>
                <td onClick={this.cancel}><button >Cancel</button></td>
                </tr>
            )
        })
        let bid = this.state.bids.map((bid, i) => {
            const dateFormat = new DateFormat('MMM, D YYYY')
            let date = dateFormat.format(new Date(parseInt(bid.date)))
            let expire = dateFormat.format(new Date(parseInt(bid.exp_date)))
            
                return (
                        <tr>
                        <td>{bid.status}</td>
                        <td>{bid.type}</td>
                        <td>{bid.name}</td>
                        <td>{bid.number}</td>
                        <td>{date}</td>
                        <td>{expire}</td>
                        <td>{bid.discount}</td>
                        <td onClick={() => this.viewItems(i)}><button >Veiw items</button></td>
                        </tr>
                )
        })
        console.log(this.props)
        return (
            <div className={this.props.classprops ? 'small': 'bidsDisplay'}>
               {this.state.itemsSwitch ? 
               <table>
                   <thead>
                       <tr>
                           <th>Qty</th>
                           <th>Name</th>
                           <th>Unit Price</th>
                           <th>Discription</th>
                           <th>Unit of Measure</th>
                       </tr>
                   </thead>
                    <tbody>
                        {itemsOnView}
                    </tbody>
               </table> 
               :
               <table>
                    <thead>
                    <tr>
                        <th>Status</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Date made</th>
                        <th>Experation</th>
                        <th>Discount</th>
                        <th>Veiw Items on Bid</th>
                     </tr>
                    </thead>
                
                <tbody>
                    {bid}
                </tbody>
                </table>
     } </div>
        )
    }
}
