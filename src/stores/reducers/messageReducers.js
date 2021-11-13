import { ADD_MESSAGE, INI_STATE_MESSAGE } from "stores/constants"

const ini = {
    data: []
}
export default (state = ini, action) => {

    switch (action.type) {
        case INI_STATE_MESSAGE:
            return {
                ...state,
                data: action.payload
            }

        case ADD_MESSAGE:
            let cp = state.data.slice()
            cp = [
                ...cp,
                action.payload
            ]
            return {
                ...state,
                data: cp
            }

        default:
            return state
    }
}