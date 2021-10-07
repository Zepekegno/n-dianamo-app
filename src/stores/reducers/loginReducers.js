export const SIGN_IN_ACTION = "SIGN_IN_ACTION"
export const SIGN_UP_ACTION = "SIGN_UP_ACTION"
export const LOGOUT_ACTION = "LOGOUT_ACTION"

const action_init = {
    type: null,
    payload: {
        loged: null,
        token: null
    }
}

const state_init = {
    loged: null,
    token: null
}

export const loginReducers = (state = {}, action) => {

    switch (action.type) {
        case SIGN_IN_ACTION:
            return {
                ...state,
                loged: action.payload.loged,
                token: action.payload.token,
            }
        case SIGN_UP_ACTION:
            return {
                ...state,
                loged: action.payload.loged,
                token: action.payload.token,
            }
        case LOGOUT_ACTION:
            return {
                ...state,
                loged: null,
                token: null,
            }
        default:
            return state
    }
}