import { USER_REGISTER_FETCH,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_FETCH,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LIST_FETCH,
    USER_LIST_SUCCESS,
    USER_LIST_FAILURE,
    USER_ADD_SUCCESS,
    USER_MODIFY_SUCCESS,
   USER_DELETE} from "./types"
import axios from 'axios'



export const userRegisterFetch = () => {
    return {
        type: USER_REGISTER_FETCH,
    }
}

export const userRegisterSuccess = (user) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: user
    }
}
export const userRegisterFailure = () => {
    return {
        type: USER_REGISTER_FAILURE,
    }
}

export const userLoginFetch = () => {
    return {
        type: USER_LOGIN_FETCH,
    }
}
export const userLoginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        payload: user
    }
}
export const userLoginFailure = () => {
    return {
        type: USER_LOGIN_FAILURE,
    }
}
export const userListFetch = () => {
    return {
        type: USER_LIST_FETCH,
    }
}

export const userListSuccess = () => (dispatch) => {
     axios.get('https://reqres.in/api/users')
         .then(response => {
             dispatch( {
                type: USER_LIST_SUCCESS,
                payload: response.data.data
            })
         })
         .catch(err => {
            console.log(err)
            dispatch({
                type: USER_LIST_FAILURE
            })
        })
    
}
export const userListFailure = () => {
    return {
        type: USER_LIST_FAILURE,
    }
}

export const userAddSuccess = (userData) => (dispatch) =>  {
    axios.post('https://reqres.in/api/users', userData)
        .then(response => {
            dispatch({
                type: USER_ADD_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    
}

export const userModifySuccess = (userData) => (dispatch) =>  {
    axios.put(`https://reqres.in/api/users${userData.id}`, userData)
        .then(response => {
            dispatch({
                type: USER_MODIFY_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    
}

export const deleteUser = (id) => (dispatch) =>  {
            dispatch({
                type: USER_DELETE,
                payload: id
            })
    
}