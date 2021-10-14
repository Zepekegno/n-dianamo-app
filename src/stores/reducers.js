import { combineReducers } from 'redux'
import { loginReducers } from './reducers/loginReducers'
import matchReducers from './reducers/matchReducers'
import usersReducers from './reducers/usersReducers'
export default combineReducers({
    users: usersReducers,
    login: loginReducers,
    match: matchReducers
})