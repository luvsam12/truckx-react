import { USER_REGISTER_FETCH,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
    USER_LOGIN_FETCH,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LIST_FETCH,
    USER_LIST_SUCCESS,
    USER_LIST_FAILURE,
    USER_ADD_FETCH,
    USER_ADD_SUCCESS,
    USER_ADD_FAILURE,
    USER_MODIFY_FETCH,
    USER_MODIFY_SUCCESS,
    USER_MODIFY_FAILURE,
   USER_DELETE} from "./userTypes"



   export const userRegisterFetch = () => {
    return {
        type: USER_REGISTER_FETCH,
    }
}

export const userRegisterSuccess = (user) => {
    return {
        type: USER_REGISTER_SUCCESS,
        payload: user.data
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

export const userListSuccess = (users) => {
    console.log(users)
    return {
        type: USER_LIST_SUCCESS,
        payload: users
    }
}
export const userListFailure = () => {
    return {
        type: USER_LIST_FAILURE,
    }
}