import React, { Component } from 'react'
import axios from 'axios'

export default class Bids extends Component {
    state = {
        bids: []
    }
componentDidMount(){
    axios.get('/bids/all').then(res => {
        console.log(res.data)
        this.setState({bids: res.data})})
}
                // status,
                // company_id,
                // customer_id,
                // date: 
                // salesman_id,
                // items:


    render() {
        console.log(this.state)
        // let allBids = this.state.bids.map((bids, i) => {
        //     let items = null
        //     if(bids.items){
        //         let items = bids.items.map(item => {
        //             return (<h3>{item}</h3>)
        //          })
        //          return items
        //     }
            
        //     return (
        //         <div className='bid'>
        //             <h1>{bids.status}</h1>
        //             <h1>{bids.date}</h1>
        //             <h1>{items}</h1>
        //         </div>
        //     )
        // })
        return (
            <div>
                {/* {allBids} */}
                
            </div>
        )
    }
}
