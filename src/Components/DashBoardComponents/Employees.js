import React, { Component } from 'react'
import axios from 'axios'
export default class Employees extends Component {
    state = {
        employees: []
    }
    componentDidMount(){
        axios.get('/employees/all').then(res => this.setState({employees: res.data}))

    }


    render() {
        console.log(this.state)
        return (
            <div className='Employees'>
                    <div className='top'>

                    </div>
                    <div className='bottom'>

                    </div>
                
            </div>
        )
    }
}
