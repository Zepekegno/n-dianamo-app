import { API } from "App"
import { INI_STATE_MATCH } from "stores/reducers/matchReducers"
import { INI_STATE_USERS } from "stores/reducers/usersReducers"

export default (id) => {
    return async dispatch => {
        const users = toGetFromApi(`/users?_embed=image`)
            .then(res => dispatch({ type: INI_STATE_USERS, payload: res }))
            .catch(e = {})


        const match = toGetFromApi(`/matched?id_matched=${id}`)
            .then(res => dispatch({ type: INI_STATE_MATCH, payload: res }))
            .catch(e = {})
    }
}

export const toGetFromApi = async (partialUrl) => {
    const res = await API.get(partialUrl)
        .then(res => res)
        .catch(e => { })
    return res?.data
}