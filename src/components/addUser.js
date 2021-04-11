import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userListSuccess } from './../actions/userActions'
import PropTypes from 'prop-types'
import { userAddSuccess } from './../actions/userActions'
 class AddUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             first_name: '',
             last_name: '',
             email:'',
             avatar:'https://reqres.in/img/faces/1-image.jpg',
             id: this.props.user.id
        }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.userAddSuccess(this.state)
            this.props.history.push('/list')
    }


    render() {
        const { first_name, last_name, email } = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                <input type="text" placeholder="First Name" name="first_name" value={first_name} onChange={this.changeHandler}></input>
                <br></br>
                <input type="text" placeholder="Last Name" name="last_name" value={last_name} onChange={this.changeHandler}></input>
                <br></br>
                <input type="email" placeholder="Email" name="email" value={email} onChange={this.changeHandler}></input>
                <br></br>
                <button type="submit">Add User</button>
                </form>
            </>
        )
    }
}

AddUser.propTypes = {
    userAddSuccess: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        user: state.user.newUser
    }
}

export default connect(mapStateToProps,{ userAddSuccess })(AddUser)
