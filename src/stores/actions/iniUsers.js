import { INI_STATE_USERS } from '../reducers/usersReducers'
import { toGetFromApi } from './getAllAction'
export default (id) => {
    return async (dispatch) => {
        await toGetFromApi(`/users?id_ne=${id}`)
            .then(res => (dispatch({ type: INI_STATE_USERS, payload: res })))
            .catch(e = {})
    }
}