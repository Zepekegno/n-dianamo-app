import { ADD_MATCHED_USER, INI_STATE_MATCH } from "stores/constants"

const ini = {
    data: []
}
export default (state = ini, action) => {

    switch (action.type) {
        case INI_STATE_MATCH:
            return {
                ...state,
                data: action.payload
            }
        case ADD_MATCHED_USER:
            let cp = state.data.slice()
            cp = [...cp, action.payload]
            return {
                ...state,
                data: cp
            }
        default:
            return state
    }
}