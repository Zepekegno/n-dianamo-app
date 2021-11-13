import { API } from "config/config"
import { INI_STATE_MATCH, INI_STATE_MESSAGE, INI_STATE_USERS } from "stores/constants"

export default async (stores) => {

    /** ini users store */
    API.get('/users?_embed=image')
        .then(res => stores.dispatch({
            type: INI_STATE_USERS,
            payload: res.data
        }))
        .catch(e => { })

    /** ini users store */
    API.get('/matched')
        .then(res => stores.dispatch({
            type: INI_STATE_MATCH,
            payload: res.data
        }))
        .catch(e => { })
    /** ini users store */
    API.get('/message')
        .then(res => stores.dispatch({
            type: INI_STATE_MESSAGE,
            payload: res.data
        }))
        .catch(e => { })
}