import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { userLoginSuccess
   } from './../redux/cake/userAction'

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
        console.log(this.state)
        const data = {
            email: this.state.login_email,
            password: this.state.login_password
        }
        axios.post('https://reqres.in/api/login', data)
        .then((response) => {
            console.log(response)
            sessionStorage.setItem('token', JSON.stringify(response.data))
            console.log(this.props)
                // this.props.History.push('/list')
                // window.location.reload()
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
        console.log(data)
        axios.post('https://reqres.in/api/register', data)
        .then((response) => {
            console.log(response.data)
            const id = response.data.id
            console.log(id)
            this.props.userLoginSuccess(id)
            sessionStorage.setItem('token', JSON.stringify(response.data))
            console.log(this.props.History)
            // browserHistory.push('/')
                // browserHistory.push('/list')
        this.props.history.push('/list')

                window.location.reload()
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
            <input type="text" placeholder="Password" name='register_password' value={register_password} onChange={this.onChangeRegisterHandler}></input>
            <button type="submit">Register</button>
            </form>
            <form onSubmit={this.onSubmitLogin}>
            <input type="text" placeholder="Email" name='login_email' value={login_email} onChange={this.onChangeLoginHandler}></input>
            <input type="text" placeholder="Password" name='login_password' value={login_password} onChange={this.onChangeLoginHandler}></input>
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
        userLoginSuccess: (users) => dispatch(userLoginSuccess(users))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Login)
