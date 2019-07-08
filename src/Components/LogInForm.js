import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUserInfo} from '../redux/ownerReducer'


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
        }).then(res => this.props.addUserInfo(res.data))
        .then(res => this.props.history.push('/dashboard')).catch(err => console.log(err))

           
            
     
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
                        type='email'
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
                 
                    <button className='link' >Login</button>
                    <Link className='link' to='/'>Back</Link>
                </form>

                
            </div>
            </div>
            </MuiThemeProvider>
        )
    }
}
function mapStateToProps(state){
    return state
}

export default withRouter(connect(mapStateToProps, {addUserInfo})(LogInForm))