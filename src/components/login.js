import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { userLoginSuccess, userListSuccess } from '../actions/userActions'

export class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             register_email: '',
             register_password: '',
             login_email: '',
             login_password: ''
        }

    }

    onChangeRegisterHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeLoginHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitLogin = (e) => {
        e.preventDefault()
        // console.log(this.state)
        const data = {
            email: this.state.login_email,
            password: this.state.login_password
        }
        axios.post('https://reqres.in/api/login', data)
        .then((response) => {
            // console.log(response)
            sessionStorage.setItem('token', JSON.stringify(response.data.token))
            this.props.userListSuccess()
            this.props.history.push('/list')
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onSubmitRegister = (e) => {
        e.preventDefault()
        const data = {
            email: this.state.register_email,
            password: this.state.register_password
        }
        axios.post('https://reqres.in/api/register', data)
        .then((response) => {
            const id = response.data.id
            // console.log(id)
            this.props.userLoginSuccess(id)
            sessionStorage.setItem('token', JSON.stringify(response.data))
         this.props.userListSuccess()
            this.props.history.push('/list')
        })
        .catch((err) => {
            console.log(err)
        })
    }
    

    render() {
        const { register_email, register_password, login_email, login_password } = this.state
        
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmitRegister}>
            <input type="text" placeholder="Email" name='register_email' value={register_email} onChange={this.onChangeRegisterHandler}></input>
            <br></br>
            <input type="text" placeholder="Password" name='register_password' value={register_password} onChange={this.onChangeRegisterHandler}></input>
            <br></br>
            <button type="submit">Register</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </form>
            <form onSubmit={this.onSubmitLogin}>
            <input type="text" placeholder="Email" name='login_email' value={login_email} onChange={this.onChangeLoginHandler}></input>
            <br></br>
            <input type="text" placeholder="Password" name='login_password' value={login_password} onChange={this.onChangeLoginHandler}></input>
            <br></br>
            <button type="submit">login</button>
            </form>
        </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userLoginSuccess: (users) => dispatch(userLoginSuccess(users)),
        userListSuccess: () => dispatch(userListSuccess())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Login)
