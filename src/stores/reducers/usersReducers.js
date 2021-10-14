export const INI_STATE_USERS = 'INI_STATE_USERS'
export const UPDATE_STATE_USERS = 'UPDATE_STATE_USERS'

/**  */
const INI = []

export default (state = INI, action) => {
    switch (action.type) {
        case INI_STATE_USERS:
            return action.payload
        default:
            return state
    }
}