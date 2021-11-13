import {
    ADD_USER_EMAIL, ADD_USER_GENDER,
    ADD_USER_NAME, ADD_USER_PASSWORD, ADD_USER_YEAR
} from "stores/constants"

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