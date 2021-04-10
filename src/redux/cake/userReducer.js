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



    const initialState = {
                            loading: false,
                            user: [],
                            loginStatus: false,
                            loginId: ''
                        }


const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USER_REGISTER_FETCH:
            return {
                ...state,
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginStatus: true,
                loginId: action.payload
            }
        case USER_REGISTER_FAILURE:
            return {
                ...state,
                loading: false,
                loginStatus: false
            }
        case USER_LOGIN_FETCH:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loginStatus: true,
                loginId: action.payload
            }
        case USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loginStatus:false
            }
        case USER_LIST_FETCH:
            return {
                ...state,
                loading: true
            }
        case USER_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case USER_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                user: []
            }
        case USER_ADD_FETCH:
            return{
                ...state,
                loading: true
            }
        case USER_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                user: state.user.push(action.payload.data)
            }
        case USER_ADD_FAILURE:
            return {
                ...state,
                loading: false
            }
        case USER_MODIFY_FETCH:
            return {
                ...state,
                loading: true
            }
        // case USER_MODIFY_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         user: 
        //     }
        // 
        
        default:
             return {
                 ...state
             }
    }
}

export default userReducer