import { API } from 'config/config'
import { ADD_MATCHED_USER, INI_STATE_USERS } from 'stores/constants'

export const getExploreAction = (handleError) => {
    return async (dispatch, getState) => {
        await API.get('/users?_embed=image')
            .then(res => {
                if (getState().users.length == res.data.length) return
                dispatch({
                    type: INI_STATE_USERS,
                    payload: res.data
                })
            })
            .catch(e => handleError())
    }
}

export const toggleReloadExploreAction = () => {
    return async (dispatch, getState) => {
        API.get(`/users?_embed=image`)
            .then(res => {
                if (getState().users.data.length == res.data.length) {
                    return
                }
                dispatch({ type: INI_STATE_USERS, payload: res.data })
            }).catch(e => { })
    }
}


export const matchUserExploreAction = (data) => {
    return async (dispatch, getState) => {
        API.post('/matched', data)
            .then(res => {
                dispatch({ type: ADD_MATCHED_USER, payload: res.data })
            })
            .catch(e => { })

    }
}