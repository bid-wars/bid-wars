import React, { Component } from 'react'
import axios from 'axios'

class LogInForm extends Component {
    state ={
        email: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()

        axios.post('/auth/login',{
            email: this.state.email,
           password: this.state.password
        }).then(res => console.log(res.data))
     
        this.setState({
            email: '',
            password: ''
        })
        
    }



    render() {

        return (
            <div className='LogInForm'>
                <form onSubmit={this.handleSubmit}>
                    <span>
                        <h4>Email:</h4>
                        <input type="email"
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}/>
                    </span>
                    <span>
                        <h4>Password:</h4>
                        <input type="password" 
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}/>
                    </span>
                    <button>Login</button>
                </form>

                
            </div>
        )
    }
}
export default LogInForm