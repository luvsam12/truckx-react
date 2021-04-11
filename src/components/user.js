import React, { Component } from 'react'
import modifyUser from './modifyUser'
 class UserComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    edit = (id) => {
        this.props.history.push(`/modify/${id}`)
    }
    

    render() {
        return (
            <tr>
                <td>{`${this.props.user.first_name} ${this.props.user.last_name}` }</td>
                <td>{this.props.user.email}</td>
                <td><img src={this.props.user.avatar} alt="user avatar"></img></td>
                <td onClick={() => this.edit(this.props.user.id)}>edit</td>
            </tr>
        )
    }
}

export default UserComponent

