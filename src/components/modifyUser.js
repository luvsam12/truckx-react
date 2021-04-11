import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { userModifySuccess } from '../actions/userActions'
import propTypes from 'prop-types'


export class modifyUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name: '',
             last_name: '',
             email:'',
             avatar: '',
             id: ''
        }
    }

    static propTypes = {
        user: propTypes.array.isRequired,

    }

    componentDidMount(){
           const id = window.location.pathname.substring(8)
           this.setState({
               id: id
           })
        axios.get(`https://reqres.in/api/users/${id}`)
        .then((res) => {
            this.setState({
                first_name: res.data.data.first_name,
                last_name: res.data.data.last_name,
                email: res.data.data.email,
                avatar: res.data.data.avatar
            })
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.userModifySuccess(this.state)
        this.props.history.push('/list')
        
    }


    render() {
        const { first_name, last_name,  email } = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="Name" name="first_name" value={first_name} onChange={this.changeHandler}></input>
                <br/>
                <input type="text" placeholder="Name" name="first_name" value={last_name} onChange={this.changeHandler}></input>
                <br></br>
                <input type="text" placeholder="Email" name="email" value={email} onChange={this.changeHandler}></input>
                <br/>
                <button type="submit">Update User</button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.users
    }
}

export default connect(mapStateToProps, { userModifySuccess })(modifyUser)
