export const ADD_USER_NAME = 'ADD_USER_NAME'
export const ADD_USER_YEAR = 'ADD_USER_YEAR'
export const ADD_USER_GENDER = 'ADD_USER_GENDER'
export const ADD_USER_EMAIL = 'ADD_USER_EMAIL'
export const ADD_USER_PASSWORD = 'ADD_USER_PASSWORD'

export default (state = {}, action) => {
    switch (action.type) {
        case ADD_USER_NAME:
            return {
                ...state,
                firstname: action.payload.firstname,
                lastname: action.payload.lastname
            }
        case ADD_USER_YEAR:
            return {
                ...state,
                year: action.payload.year,
            }
        case ADD_USER_EMAIL:
            return {
                ...state,
                email: action.payload.email,
            }
        case ADD_USER_GENDER:
            return {
                ...state,
                gender: action.payload.gender
            }
        case ADD_USER_PASSWORD:
            return {
                ...state,
                password: action.payload.password,
            }

        default:
            return state
    }
}