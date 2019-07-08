import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router-dom'

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
            <MuiThemeProvider>
            <div className='Loginpage'>
               
            <div className='LogInForm'>
                <form onSubmit={this.handleSubmit}>
                    
                  
                        <TextField 
                        type='emal'
                   
                        floatingLabelText='Email'
                        floatingLabelFocusStyle={{color: '#4D4D4D',
                         fontSize: '1.2em'   
                        }}
                        style={{color: '#4D4D4D',
                        fontSize: '1.2em'    
                        }}
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                     
                    
                        <TextField 
                     
                        floatingLabelText='Password'
                        floatingLabelFocusStyle={{color: '#4D4D4D',
                         fontSize: '1.2em'   
                        }}
                        style={{color: '#4D4D4D',
                        fontSize: '1.2em' }}
                        type="password" 
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}/>
                 
                    <Link className='link' to='/dashboard'>Login</Link>
                    <Link className='link' to='/'>Back</Link>
                </form>

                
            </div>
            </div>
            </MuiThemeProvider>
        )
    }
}
export default LogInForm