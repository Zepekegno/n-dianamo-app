import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'

import { loginReducers } from "./reducers/loginReducers";
import messagesReducers from "./reducers/messagesReducers";
import registerReducers from "./reducers/registerReducers";
import usersReducers from "./reducers/usersReducers";

export default createStore(
    combineReducers({
        login: loginReducers,
        register: registerReducers,
        users: usersReducers,
        messages: messagesReducers,
    }),
    compose(
        applyMiddleware(thunk)
    )
)