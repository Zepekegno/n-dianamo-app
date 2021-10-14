/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import 'react-native-reanimated'
import React, { Component, useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';

import MainNavigator from 'components/MainNavigator';
import Auth from 'components/Auth';
import Spiner from 'componentUtility/Spiner';

import AuthContext from 'contexts/AuthContext';
import { authRequest } from 'contexts/AuthContextConfigure';
import axios from 'axios'
import { Provider, } from 'react-redux';
import store from 'stores'
import iniUsers from 'stores/actions/iniUsers';
import { INI_STATE_USERS } from 'stores/reducers/usersReducers';
import stores from 'stores';
import getAllAction from 'stores/actions/getAllAction';
import Navigator from 'components/Navigator';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

export const API = axios.create({
    baseURL: "http://192.168.8.101:3200",
})

export default () => {

    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(1)
    const [error, setError] = useState()

    useEffect(() => {
        stores.dispatch(getAllAction(1))
    }, [])

    const auth = authRequest(
        {
            error,
            setError
        }, setLoading, setToken)

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Spiner size="large" />
            </View>
        )
    }

    return (
        <Provider store={store} >
            <View style={{ flex: 1 }}>
                {token == null ? (
                    <View style={{ flex: 1 }}>
                        <AuthContext.Provider value={auth}>
                            <Auth />
                        </AuthContext.Provider>
                    </View>
                ) : (
                    <Navigator />
                )}
            </View>
        </Provider>
    )
}


