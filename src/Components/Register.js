import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import randomstring from 'randomstring'
import {GridLoader} from 'react-spinners'
import { AsYouType } from 'libphonenumber-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage} from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import {addUserInfo} from '../redux/ownerReducer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Link} from 'react-router-dom'

 class Register extends Component {
    state = {
        firstname: '',
        lastname: '',
        companyName: '',
        website: '',
        phone: '',
        isUploading: false,
        logo: '',
        role: 'owner',
        email: '',
        password: '',
    }
    handleChange = (e) =>{
        
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleChangePhone = (e) => {
        const phone1 = new AsYouType('US').input(e.target.value)
        this.setState({
            phone: phone1
        })
    }

    handleSelect = (e) => {
        this.setState({
            role: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
      

        axios.post('/auth/register',{
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            companyName: this.state.companyName,
            website: this.state.website,
            phone: this.state.phone,
            email:  this.state.email,
            logo: this.state.logo,
            role: this.state.role,
            password: this.state.password

        }).then(res => this.props.addUserInfo(res.data))
        .then(res => this.props.history.push('/dashboard'))
     
        this.setState({
            firstname: '',
            lastname: '',
            companyName: '',
            website: '',
            phone: '',
            email:  '',
            logo: '',
            password: ''
        })
        
    }

    getSignedRequest = ([file]) => {
        this.setState({isUploading: true})
        
        const fileName = `${randomstring.generate()}-${file.name.replace(/\s/g, '-')}`
       
        axios.get('/s3/sign', {
            params: {
            'file-name': fileName,
            'file-type': file.type
            }
        }).then( (res) => {
            const { signedRequest, url } = res.data 
    
            this.uploadFile(file, signedRequest, url)
        }).catch( err => {
            console.log(err)
        })
        }
    
        uploadFile = ( file, signedRequest, url) => {
            const header = {
                headers: {
                    'Content-Type': file.type,
                    },
                };
            axios.put(signedRequest, file, header)
            .then((res) => {
                this.setState({
                    logo: url,
                    isUploading: false
                })
                
            })
        }


    render() {
    
        return (
            <MuiThemeProvider>
            <div className='RegisterPage'>
            
                <div className='RegisterForm'>
                    <h1>Let's get you set up</h1>
                    {/* <select name="role" onChange={this.handleSelect}>
                            <option value="user" name='user' selected >User</option>  
                            <option value="owner" name='owner'>Owner</option>
                            

                        </select> */}
                    {this.state.role === 'owner' ? 
                <Dropzone
                onDropAccepted={this.getSignedRequest}
                accept="image/*"
                multiple={false}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {this.state.isUploading ? 
                        <GridLoader
                        size={35}
                        color={'#34D1BF'} /> : this.state.logo ? 
                        <div className='logoUploaded'>
                            <img src={this.state.logo} />
                        </div> :
                        <div className='iconDiv'>
                          <FontAwesomeIcon 
                          icon={faImage}
                          size='6x'
                        color='#34d1bf'/>
                        <p>Click here to add company logo</p>
                        </div> }
                    </div>
                )}
                 </Dropzone> : null}
                    <form onSubmit={this.handleSubmit}>

                        <div className='mid'>
                            <div className='left'>
                        <h2>Your Information</h2>
                            <TextField  
                            type="text"
                            name='firstname'
                          
                            floatingLabelText='Firstname'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.firstname}
                            onChange={this.handleChange}/>
                            <TextField
                            type="text"
                            name='lastname'
                         
                            floatingLabelText='Lastname'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.lastname}
                            onChange={this.handleChange}/>
                        
                        {this.state.role === 'owner' ?
                        <>
                            <TextField 
                            type="text"
                            name='companyName'
                          
                            floatingLabelText='Company Name'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.companyName}
                            onChange={this.handleChange}/>
                            <TextField 
                            type="text"
                            name='website'
                         
                            floatingLabelText='Company Website'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.website}
                            onChange={this.handleChange}/>
                         </>: null }
                            <TextField 
                            type="tel"
                            name='phone'
                     
                            floatingLabelText='Phone'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.phone}
                            onChange={this.handleChangePhone}/>
                     
                     </div>    
                     <div className='right'>
                        <h2>Login info</h2>
                            <br/>
                            <TextField 
                            type="email"
                            name='email'
                          
                            floatingLabelText='Email'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.email}
                            onChange={this.handleChange}/>
           
                       
                            <TextField 
                            type="password" 
                            name='password'
                    
                            floatingLabelText='Password'
                            floatingLabelFocusStyle={{color: '#4D4D4D',
                            fontSize: '1.2em'   
                            }}
                            style={{color: '#4D4D4D',
                            fontSize: '1.2em'    
                            }}
                            value={this.state.password}
                            onChange={this.handleChange}/>
                     </div>
                     </div>
                        <Link className='link' to='/dashboard'>Register</Link>
                        <Link className='link' to='/'>Back</Link>
                    </form>
                </div>
            </div>
            </MuiThemeProvider>
        )
    }
}
function mapStateToProps(state){
    return state.ownerReducer
}
export default connect(mapStateToProps, {addUserInfo})(Register)