import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { BarLoader } from 'react-spinners'
import randomstring from 'randomstring'
import axios from 'axios'

export default class ImageAdder extends Component {
    state = {
        isUploading: false,
        image: '',
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
        return (
            <div>
                <Dropzone
                onDropAccepted={this.getSignedRequest}
                accept="image/*"
                multiple={false}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        {this.state.isUploading ? 
                        <BarLoader
                        color={'#304246'} /> : 
                        <span className='button'>Upload Picture</span>}
                    </div>
                )}
                 </Dropzone> 
            </div>
        )
    }
}
