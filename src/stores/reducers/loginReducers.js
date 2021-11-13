import { LOGOUT_ACTION, SIGN_IN_ACTION, SIGN_UP_ACTION } from "stores/constants"

const init = {
    logedId: 1,
    token: 1,
}

export const loginReducers = (state = init, action) => {

    switch (action.type) {
        case SIGN_IN_ACTION:
            return {
                ...state,
                logedId: action.payload.logedId,
                token: action.payload.token,
            }
        case SIGN_UP_ACTION:
            return {
                ...state,
                logedId: action.payload.logedId,
                token: action.payload.token,
            }
        case LOGOUT_ACTION:
            return {
                ...state,
                logedId: null,
                token: null,
            }
        default:
            return state
    }
}