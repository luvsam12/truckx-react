import { createStore } from 'redux'
import CakeReducer from './cakeReducer'


const store = createStore(CakeReducer)

export default store