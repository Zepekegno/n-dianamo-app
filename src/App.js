/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import 'react-native-reanimated'
import React, { useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'

import MainNavigator from 'components/MainNavigator';
import Auth from 'components/Auth';
import Spiner from 'componentUtility/Spiner';

import { Provider } from 'react-redux';
import stores from 'stores';
import AuthContext from 'contexts/AuthContext';
import isEmpty from 'utils/isEmpty';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

export const API = axios.create({
    baseURL: "http://192.168.8.101:3200",
})

export default () => {

    const [loading, setLoading] = useState(false)
    const [tokens, setTokens] = useState()
    const [error, setError] = useState()

    const auth = {
        signIn: async (email, password) => {
            if (isEmpty(email) || isEmpty(password)) {
                setLoading(false)
                setError("L'un des champs n'est pas rempli")
                return
            }
            try {
                setLoading(true)
                const data = await API.get(`/users?email=${email}&password=${password}`).then((res) => res.data, (e) => {
                    setError("Server Errors")
                    setLoading(false)
                })

                if (isEmpty(data) == false) {
                    const token = new Date(Date.now()).valueOf().toString()
                    setTokens(token)
                    setLoading(false)
                } else {
                    setError('Email ou Mot de passe incorrect')
                    setLoading(false)
                }
            } catch (e) {
                setLoading(false)
                setError("Server Errors")
            }
        },
        signUp: async (data) => {
            try {
                setLoading(true)
                const res = await API.post('/users', data)
                if (res.request.DONE == 4) {
                    const token = new Date(Date.now()).valueOf().toString()
                    setTokens(token)
                } else {
                    setLoading(false)
                    Alert.alert("Erreur server", "Veuillez reesaiyez svp")
                }
                setLoading(false)
            } catch (e) {
                setLoading(false)
                setError("Server Errors")
            }
        },
        error: {
            getError: error,
            setError
        },
    }

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spiner size="large" />
            </View>
        )
    }

    return (
        <Provider store={stores}>
            {tokens == undefined ? (
                <View style={{ flex: 1 }}>
                    <AuthContext.Provider value={auth}>
                        <Auth />
                    </AuthContext.Provider>
                </View>
            ) : (
                <MainNavigator />
            )}
        </Provider>
    )
}



const STYLE = StyleSheet.create({

})