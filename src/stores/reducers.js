import { combineReducers } from 'redux'
import { loginReducers } from './reducers/loginReducers'
import matchReducers from './reducers/matchReducers'
import messageReducers from './reducers/messageReducers'
import usersReducers from './reducers/usersReducers'

/** the reducers */
export default combineReducers({
    users: usersReducers,
    login: loginReducers,
    match: matchReducers,
    message: messageReducers
})