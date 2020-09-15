import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import profile from './profile'
import prompt from './prompt'

export default combineReducers({
    alert,
    auth,
    profile,
    prompt,
})
