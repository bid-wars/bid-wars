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

 class Register extends Component {
    state = {
        firstname: '',
        lastname: '',
        companyName: '',
        website: '',
        phone: '',
        isUploading: false,
        logo: '',
        role: 'user',
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

        }).then(res => console.log(res.data))
     
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
        console.log(this.state.password)
        return (
            <div>
                <div className='RegisterForm'>
                    <h1>Let's get you set up</h1>
                    <select name="role" onChange={this.handleSelect}>
                            <option value="user" name='user' selected >User</option>  
                            <option value="owner" name='owner'>Owner</option>
                            

                        </select>
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
                          size='7x'
                        color='#34d1bf'/>
                        <p>Click here to add company logo</p>
                        </div> }
                    </div>
                )}
                 </Dropzone> : null}
                    <form onSubmit={this.handleSubmit}>

                        

                        <h2>Your Information</h2>
                        <span>
                            <h4>First Name:</h4>
                            <input type="text"
                            name='firstname'
                            value={this.state.firstname}
                            onChange={this.handleChange}/>
                        </span>
                        <span>
                            <h4>Last Name:</h4>
                            <input type="text"
                            name='lastname'
                            value={this.state.lastname}
                            onChange={this.handleChange}/>
                        </span>
                        {this.state.role === 'owner' ?
                        <>
                        <span>
                            <h4>Company Name:</h4>
                            <input type="text"
                            name='companyName'
                            value={this.state.companyName}
                            onChange={this.handleChange}/>
                        </span>
                        <span>
                            <h4>Company Website:</h4>
                            <input type="text"
                            name='website'
                            value={this.state.website}
                            onChange={this.handleChange}/>
                        </span> </>: null }
                        <span>
                            <h4>Phone:</h4>
                            <input type="tel"
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleChangePhone}/>
                        </span>

                        <h2>Login info</h2>
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
                        <button>Register</button>
                    </form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return state.ownerReducer
}
export default connect(mapStateToProps, {addUserInfo})(Register)