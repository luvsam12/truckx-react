import React, { Component } from 'react'
import axios from 'axios'
import User from './user'
// import { connect } from 'react-redux'
// import { userListFetch,
//         userListSuccess,
//         userListFailure
//        } from './../redux/cake/userAction'

 class list extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            user: [],
            err: '',
            search_user: '',
            search_result: []
         }
     }
     //use effect
     componentDidMount() {
         axios.get('https://reqres.in/api/users')
         .then(response => {
             console.log(response.data.data)
             this.setState({user: response.data.data})
         })
         .catch(err => {
             console.log(err)
             this.setState({error: err})
         })
     }

     add_user = (user) => {
        this.state.User.push(user)
     }

     clickAddUser = () => {
         this.props.history.push('/add')
        // console.log("hello")
        // this.props.history.push('/add')
     }

     onChangeSearchHandler = (e) => {
         this.setState({
             search_user: e.target.value.toLowerCase()
         })
     }

    render() {
        const { user, search_user, search_result } = this.state
        const userList = user.map((current, index) => <User key={current.id} user={current} history={this.props.history}></User>)
        const search = user.filter(now => {
           return now.first_name.toLowerCase().includes(this.state.search_user) || now.last_name.toLowerCase().includes(this.state.search_user) || now.email.toLowerCase().includes(this.state.search_user)
        })
        const searchList = search.map((current,index) => <User ket={current.id} user={current} history={this.props.history}></User>)
        // console.log(search_user)
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


export default list

// const mapStateToProps = (state) => {
//     return {
//         user: state.user
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userListSuccess: () => dispatch(userListSuccess())
//     }
// }




// export default connect(mapStateToProps, mapDispatchToProps)(list)



// import React from 'react'
// import { connect } from 'react-redux'
// import { userListFetch,
//     userListSuccess,
//     userListFailure
//    } from './../redux/cake/userAction'
// import { buyCake } from '../redux/cake/index'


// function list(props) {
//     console.log(props)
//     return (
//         <div>
//             <h1>Loading - {props.loading ? "TRUE" : "FALSE "}</h1>
//             <button onClick={props.userListFetch}>But Cakes</button>
//         </div>
//     )
// }

// const mapStateToProps = (state) => {
//     return {
//         loading: state.loading
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         userListFetch: () => {
//             // console.log('naman')
//             dispatch(userListFetch())}
//     }
// }




// export default connect(mapStateToProps, mapDispatchToProps)(list)
