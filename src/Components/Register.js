import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import randomstring from 'randomstring'
import {GridLoader} from 'react-spinners'
import { AsYouType } from 'libphonenumber-js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage} from '@fortawesome/free-solid-svg-icons'

 class Register extends Component {
    state = {
        first_name: '',
        last_name: '',
        company_name: '',
        website: '',
        phone1: '',
        phone2: '',
        isUploading: false,
        image: '',
        role: 'user'
    }
    handleChange = (e) =>{
        
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleChangePhone1 = (e) => {
        const phone1 = new AsYouType('US').input(e.target.value)
        this.setState({
            phone1: phone1
        })
    }
    handleChangePhone2 = (e) => {
        const phone2 = new AsYouType('US').input(e.target.value)
        this.setState({
            phone2: phone2
        })
    }
    handleSelect = (e) => {
        this.setState({
            role: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        

        // axios.post('/auth/register',{
        //     first_name: this.state.first_name,
        //     last_name: this.state.last_name,
        //     company_name: this.state.company_name,
        //     website: this.state.website,
        //     phone1: this.state.phone1,
        //     phone2: this.state.phone2,
        //     email:  this.state.email,
        //     image: this.state.image,
        //     role: this.state.role

        // })
     
        this.setState({
            first_name: '',
            last_name: '',
            company_name: '',
            website: '',
            phone1: '',
            phone2: '',
            email:  '',
            image: '',
            password: ''
        })
        
    }

    getSignedRequest = ([file]) => {
        this.setState({isUploading: true})
        
        const fileName = `${randomstring.generate()}-${file.name.replace(/\s/g, '-')}`
       
        axios.get('/sign-s3', {
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
                    image: url,
                    isUploading: false
                })
                
            })
        }


    render() {
        console.log(this.state.phone1, this.state.phone2)
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
                        color={'#34D1BF'} /> : this.state.image ? 
                        <div className='logoUploaded'>
                            <img src={this.state.image} />
                        </div> :
                        <div className='iconDiv'>
                          <FontAwesomeIcon 
                          icon={faImage}
                          size='7x'
                        color='#34d1bf'/>
                        <p>Add Company Logo</p>
                        </div> }
                    </div>
                )}
                 </Dropzone> : null}
                    <form onSubmit={this.handleSubmit}>

                        

                        <h2>Your Information</h2>
                        <span>
                            <h4>First Name:</h4>
                            <input type="text"
                            name='first_name'
                            value={this.state.first_name}
                            onChange={this.handleChange}/>
                        </span>
                        <span>
                            <h4>Last Name:</h4>
                            <input type="text"
                            name='last_name'
                            value={this.state.last_name}
                            onChange={this.handleChange}/>
                        </span>
                        {this.state.role === 'owner' ?
                        <>
                        <span>
                            <h4>Company Name:</h4>
                            <input type="text"
                            name='company_name'
                            value={this.state.company_name}
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
                            name='phone1'
                            value={this.state.phone1}
                            onChange={this.handleChangePhone1}/>
                        </span>
                        {this.state.role === 'owner' ? <>
                        <span>
                            <h4>Phone 2:</h4>
                            <input type="tel"
                            name='phone2'
                            value={this.state.phone2}
                            onChange={this.handleChangePhone2}/>
                        </span> </> : null }
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
export default Register