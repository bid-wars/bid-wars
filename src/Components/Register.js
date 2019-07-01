import React, { Component } from 'react'
import axios from 'axios'
import Dropzone from 'react-dropzone'
import randomstring from 'randomstring'
import {GridLoader} from 'react-spinners'

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
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()

        axios.post('/auth/register',{
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company_name: this.state.company_name,
            website: this.state.website,
            phone1: this.state.phone1,
            phone2: this.state.phone2,
            email:  this.state.email
        })
     
        this.setState({
            first_name: '',
            last_name: '',
            company_name: '',
            website: '',
            phone1: '',
            phone2: '',
            email:  ''
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
        console.log(this.state.image)
        return (
            <div>
                <div className='RegisterForm'>
                    <h1>Let's get you set up</h1>
                <Dropzone
                onDropAccepted={this.getSignedRequest}
                accept="image/*"
                multiple={false}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {this.state.isUploading ? 
                        <GridLoader
                        color={'#34D1BF'} /> : this.state.image ? 
                        <div>
                            <img src={this.state.image} />
                        </div> :
                        <div className='iconDiv'>
                        <i class="far fa-image fa-7x"
                        style={{color: '#34d1bf'}}/>
                        <p>Add Company Logo</p>
                        </div> }
                    </div>
                )}
                 </Dropzone> 
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
                        </span>
                        <span>
                            <h4>Phone 1:</h4>
                            <input type="number"
                            name='phone1'
                            value={this.state.phone1}
                            onChange={this.handleChange}/>
                        </span>
                        <span>
                            <h4>Phone 2:</h4>
                            <input type="number"
                            name='phone2'
                            value={this.state.phone2}
                            onChange={this.handleChange}/>
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
export default Register