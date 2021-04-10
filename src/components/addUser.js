import React, { Component } from 'react'
import axios from 'axios'

 class AddUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name: '',
             last_name: '',
             email:'',
             avtar:'https://reqres.in/img/faces/1-image.jpg'
        }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://reqres.in/api/users', this.state)
        .then(response => {
            console.log(response)
            console.log(this.props)
            this.props.myClickHandler(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        const { first_name, last_name, email } = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="First Name" name="first_name" value={first_name} onChange={this.changeHandler}></input>
                <input type="text" placeholder="Last Name" name="last_name" value={last_name} onChange={this.changeHandler}></input>
                <input type="email" placeholder="Email" name="email" value={email} onChange={this.changeHandler}></input>
                <button type="submit">Add User</button>
                </form>
            </>
        )
    }
}

export default AddUser
