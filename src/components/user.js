import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteUser} from './../actions/userActions'
 class UserComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    edit = (id) => {
        this.props.history.push(`/modify/${id}`)
    }
    delete = (id) => {
        this.props.deleteUser(id)
    }
    

    render() {
        return (
            <tr>
                <td>{`${this.props.user.first_name} ${this.props.user.last_name}` }</td>
                <td>{this.props.user.email}</td>
                <td><img src={this.props.user.avatar} alt="user avatar"></img></td>
                <td >
                    <p onClick={() => this.edit(this.props.user.id)}>edit</p>
                    <p onClick={() => this.delete(this.props.user.id)}>delete</p>
                     </td>
            </tr>
        )
    }
}


export default connect(null, { deleteUser })(UserComponent)

