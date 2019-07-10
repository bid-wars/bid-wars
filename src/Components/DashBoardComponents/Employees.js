import React, { Component } from 'react'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export default class Employees extends Component {
    state = {
        employees: [],
        edit: false,
        onEdit: null,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        addedEmployees: [],
        editfirstname: '',
        editlastname: '',
        editemail: '',
        editpassword: ''
       
    }

    componentDidMount(){
        axios.get('/employees/all').then(res => this.setState({employees: res.data}))

    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEditButton = (i) => {
        this.setState({
            edit: !this.state.edit,
            onEdit: this.state.employees[i]
        })
    }
    completeEdit = (id) => {
        
       axios.put('/employees/update', {
           id: id,
           firstname: this.state.editfirstname,
           lastname: this.state.editlastname,
           email: this.state.editemail,
           password: this.state.editpassword
         
       }) 
       this.handleEditButton()
    }
    delete = (id) => {
        axios.delete(`/employees/delete/${id}`)
    }
    addEmployeesToList = (e) =>{
      
        const {firstname, lastname, email, password} = this.state

        this.setState({
            addedEmployees: [...this.state.addedEmployees, {
                firstname,
                lastname,
                email,
                password,
                roll: 'sales'
            }],
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        })
    }
    removeFromAddList = (i) => {
        let newList = [...this.state.addedEmployees]
        newList.splice(i,1)
        this.setState({
            addedEmployees: newList
        })
    }
    submitToDb = () =>{
        axios.post('/employees/add', this.state.addedEmployees).then(res => this.setState({addedEmployees: []}))

    }

    render() {
        console.log(this.state)
        let employees = this.state.employees.map((person, i) => {
            return (
                <div className='person' key={person.id}>
                    <button onClick={() => this.handleEditButton(i)}>Edit</button>
                    <h2>{person.firstname}</h2>
                    <h2>{person.lastname}</h2>
                </div>
            )
        })
        let addedEmployees = this.state.addedEmployees.map((person,i) => {
        
            return (
                <div className='addedPerson'>
                    <h2>{person.firstname}</h2>
                    <h2>{person.lastname}</h2>
                    <h2>{person.email}</h2>
                    <FontAwesomeIcon 
                    className='trash'
                    icon={faTrashAlt}
                    color='#ff4040'
                    size='2x'
                    onClick={() => this.removeFromAddList(i)}
                    />

                </div>
            )
        })
        const style = {color: 'black',
fontSize: '1.2em'}
        return (
            <MuiThemeProvider>
            <div className='Employees'>
                    <div className='top'>
                       <div className='addedlist'>
                           {this.state.addedEmployees.length > 0 ? <> {addedEmployees} <button onClick={this.submitToDb}>submit</button></> : null }
                       
                       </div>
                       <TextField 
                        type='text'
                        floatingLabelText='First Name'
                        floatingLabelFocusStyle={style}
                        style={style}
                        name='firstname'
                        value={this.state.firstname}
                        onChange={this.handleChange}
                       />
                       <TextField 
                        type='text'
                        floatingLabelText='Last Name'
                        floatingLabelFocusStyle={style}
                        style={style}
                        name='lastname'
                        value={this.state.lastname}
                        onChange={this.handleChange}
                       />
                       <TextField 
                        type='email'
                        floatingLabelText='Email'
                        floatingLabelFocusStyle={style}
                        style={style}
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        />
                        <TextField 
                        floatingLabelText='Password'
                        floatingLabelFocusStyle={style}
                        style={style}
                        type="password" 
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}/>
                        <button onClick={this.addEmployeesToList}>Add</button>
                    
                    </div>
                    <div className='bottom'>
                        <div className='line'></div>
                        {this.state.edit ? 
                        <div className='employeeList'>
                            <div className='names'>
                            <h1>{this.state.onEdit.firstname}</h1>
                            <h1>{this.state.onEdit.lastname}</h1>
                            </div> 
                            <div className='inputboxes'>
                            <TextField 
                        type='text'
                        floatingLabelText='First Name'
                        floatingLabelFocusStyle={style}
                        style={style}
                        name='editfirstname'
                        value={this.state.editfirstname}
                        onChange={this.handleChange}
                       />
                       <TextField 
                        type='text'
                        floatingLabelText='Last Name'
                        floatingLabelFocusStyle={style}
                        style={style}
                        name='editlastname'
                        value={this.state.editlastname}
                        onChange={this.handleChange}
                       />
                       <TextField 
                        type='email'
                        floatingLabelText='Email'
                        floatingLabelFocusStyle={style}
                        style={style}
                        name='editemail'
                        value={this.state.editemail}
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
                        name='editpassword'
                        value={this.state.editpassword}
                        onChange={this.handleChange}/>
                        <button onClick={() =>this.completeEdit(this.state.onEdit.id)}>Submit</button>
                        <FontAwesomeIcon 
                        className='trash'
                        icon={faTrashAlt}
                        color='#ff4040'
                        size='2x'
                        onClick={() => this.delete(this.state.onEdit.id)}
                        />
                        </div>
                        </div>  :
                         <div className='employeeList'>
                        {employees} 
                        </div>
                              }
                      
                    </div>
                
            </div>
            </MuiThemeProvider>
        )
    }
}
