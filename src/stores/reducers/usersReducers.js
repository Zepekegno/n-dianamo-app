import { INI_STATE_USERS } from "stores/constants"

/**  */
const INI = {
    data: []
}

export default (state = INI, action) => {
    switch (action.type) {
        case INI_STATE_USERS:
            if (state.data.length != action.payload.length) {
                return {
                    ...state,
                    data: action.payload
                }
            }
            return state
        default:
            return state
    }
}