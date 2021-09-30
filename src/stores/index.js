import { combineReducers } from "redux";
import messagesReducers from "./reducers/messagesReducers";
import usersReducers from "./reducers/usersReducers";

export default combineReducers({
    users: usersReducers,
    messages: messagesReducers
})