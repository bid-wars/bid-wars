import React, { Component } from 'react'
import axios from 'axios'

class LogInForm extends Component {
    state ={
        userName: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.value]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('/auth/login',{
           username: this.state.userName,
           password: this.state.password
        })
    }



    render() {
        console.log(this.state)
        return (
            <div className='LogInForm'>
                <form>
                    <span>
                        <h4>Username:</h4>
                        <input type="text"
                        name='username'
                        onChange={this.handleChange}/>
                    </span>
                    <span>
                        <h4>Password:</h4>
                        <input type="password" name="password"
                        onChange={this.handleChange}/>
                    </span>
                    <button>Log in</button>
                </form>

                
            </div>
        )
    }
}
export default LogInForm