import React, { Component } from 'react'
import axios from 'axios'
// import { useParams } from "react-router";


export class modifyUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email:'',
             avatar: '',
             id: ''
        }
    }

    componentDidMount(){
           const id = window.location.pathname.substring(8)
           this.setState({
               id: id
           })
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((res) => {
            console.log(res)
            this.setState({
                name: res.data.data.first_name + " " + res.data.data.last_name,
                email: res.data.data.email,
                avatar: res.data.data.avatar
            })
        })
        .catch((err) => {
            console.log(err)
        })
        // console.log(this.state)
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.put(`https://reqres.in/api/users${this.state.id}`, this.state)
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }


    render() {
        console.log(this.state)
        const { name, email } = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Name" name="name" value={name} onChange={this.changeHandler}></input>
                <br/>
                <input type="text" placeholder="Email" name="email" value={email} onChange={this.changeHandler}></input>
                <br/>
                <button type="submit">Update User</button>
                </form>
            </>
        )
    }
}

export default modifyUser


// import React from 'react'
// 
// let ModifyUser = () => {
//     return ( 
        // <div>
        //     <input type="text" placeholder="Name"></input>
        //     <input type="text" placeholder="Job"></input>
        //     <button>Register</button>
        // </div>
//     )
// }

// export default ModifyUser;