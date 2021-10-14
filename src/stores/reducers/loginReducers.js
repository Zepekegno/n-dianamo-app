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