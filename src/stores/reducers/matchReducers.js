export const INI_STATE_MATCH = 'INI_STATE_MATCH'
export const GET_ALL_USER_EXCEPT_SESION = 'GET_ALL_USER_EXCEPT_SESION'

export default (state = [], action) => {

    switch (action.type) {
        case INI_STATE_MATCH:
            return action.payload
        default:
            return state
    }
}