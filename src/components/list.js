import React, { Component, useEffect } from 'react'
import  UserComponent from './user'
import { connect } from 'react-redux'
import { userListSuccess } from './../actions/userActions'
import PropTypes from 'prop-types'

 class list extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            search_user: '',
            search_result: []
         }
     }

    //  componentDidMount() {
    //      console.log('componentdidmount')
    // this.props.userListSuccess()
    //  }

     componentWillReceiveProps(nextProps){
        if(nextProps.newUser.id) {
            this.props.user.push(nextProps.newUser);
        }
     }
     clickAddUser = () => {
         this.props.history.push('/add')
     }

     onChangeSearchHandler = (e) => {
         this.setState({
             search_user: e.target.value.toLowerCase()
         })
     }

    render() {
        const { search_user, search_result } = this.state
        const userList = this.props.user.map((current, index) => <UserComponent  user={current} history={this.props.history}></UserComponent>)
        const search = this.props.user.filter(now => {
           return now.first_name.toLowerCase().includes(search_user) || now.last_name.toLowerCase().includes(search_user) || now.email.toLowerCase().includes(search_user)
        })
        const searchList = search.map((current,index) => <UserComponent key={current.id} user={current} history={this.props.history}></UserComponent>)
        return (
            <div style={{textAlign:"center"}}>
                <input type="text" placeholder="Search" name='search_user' value={search_user} onChange={this.onChangeSearchHandler} ></input>
                <br />
                <button onClick={this.clickAddUser} style={{float:'right'}}>Add user</button>
                <br />
                List of posts
                <div style={{marginLeft:'30%'}}>
                <table>
                    <tbody>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                    <th>Action</th>
                </tr>
                {search_result.length !== '' ? searchList : userList}
                </tbody>
            </table>
            </div>
            </div>
        )
    }
}

 list.propTypes = {
    userListSuccess: PropTypes.func.isRequired,
    user: PropTypes.array.isRequired,
    newUser: PropTypes.object
 }

const mapStateToProps = (state) => ({
     user: state.user.users,
     newUser: state.user.newUser
    })

export default connect( mapStateToProps, { userListSuccess })(list)
