/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import 'react-native-reanimated'
import React, { Component } from "react";
import { View } from 'react-native';

import Spiner from 'components/utility/Spiner';

import { Provider } from 'react-redux';
import stores from 'stores';
import Navigator from 'components/navigators/Navigator';
import iniAppStore from 'stores/actions/iniAppStore';

export default class App extends Component {

    state = {
        loading: false,
        token: null,
        error: null
    }


    componentDidMount() {
        this.loadData()
    }

    loadData = async () => {
        this.setState({ loading: true })
        await iniAppStore(stores)
            .catch(e => { })
        this.setState({ loading: false })
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Spiner size="large" />
                </View>
            )
        }
        return (
            <Provider store={stores} >
                <Navigator />
            </Provider>
        )
    }
}

{/* <View style={{ flex: 1 }}>
{token == null ? (
    <View style={{ flex: 1 }}>
        <AuthContext.Provider value={auth}>
            <Auth />
        </AuthContext.Provider>
    </View>
) : (
    <Navigator /> 
)}
</View> */}

