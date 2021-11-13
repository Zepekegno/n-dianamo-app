import { API } from 'config/config'
import { Alert } from 'react-native'
import isEmpty from '../utils/isEmpty'
export const authRequest = (errors, loading, token) => {
    return {
        signIn: async (email, password) => {
            if (isEmpty(email) || isEmpty(password)) {
                errors.setError("L'un des champs n'est pas rempli")
                return
            }
            try {
                loading(true)
                const data = await API.get(`/users?email=${email}&password=${password}`).then((res) => res.data, (e) => {
                    errors.setError("Server Errors")
                    loading(false)
                })

                if (isEmpty(data) == false) {
                    const token = new Date(Date.now()).valueOf().toString()
                    token(token)
                    loading(false)
                } else {
                    errors.setError('Email ou Mot de passe incorrect')
                    loading(false)
                }
            } catch (e) {
                loading(false)
                errors.setError("Server Errors")
            }
        },
        signUp: async (data) => {
            try {
                loading(true)
                const res = await API.post('/users', data)
                if (res.request.DONE == 4) {
                    const tokens = new Date(Date.now()).valueOf().toString()
                    token(tokens)
                } else {
                    loading(false)
                    Alert.alert("Erreur server", "Veuillez reesaiyez svp")
                }
                loading(false)
            } catch (e) {
                loading(false)
                errors.setError("Server Errors")
            }
        },
        errors
    }
}