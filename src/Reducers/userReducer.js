import { act } from "react-dom/test-utils"
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
        USER_DELETE} from "./../actions/types"



    const initialState = {
                            loading: false,
                            users: [],
                            loginStatus: false,
                            loginId: '',
                            newUser: {}
                        }


export const userReducer = (state = initialState, action) => {
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
            // console.log(action.payload)
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case USER_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                users: []
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
                newUser: action.payload
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
        case USER_MODIFY_SUCCESS:
            // console.log(action.payload)
            // return {
            //     ...state.users.map((user) => (
            //         user.id === action.payload.id ? {...state.users, first_name: action.payload.first_name, last_name: action.payload.last_name, email: action.payload.email} : user
            //     ))
            // }
            let newArray = [...state.users]
            newArray.filter(now => {
                if(now.id.toString() === action.payload.id.toString()){
                    now.first_name = action.payload.first_name
                    now.last_name = action.payload.last_name
                    now.email = action.payload.email
                }
                return now
            })
            console.log(newArray)
            console.log("hello")
            return {
                ...state,
                loading: false,
                users: newArray
            }
        case USER_DELETE:
            const newArray1 = [...state.users].filter((now,index) => {if(now.id !== action.payload){
                return now
            } })
            return {
                ...state,
                loading: false,
                users: newArray1
            }
        
        default:
             return state
    }
}
