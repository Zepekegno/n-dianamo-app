/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import 'react-native-reanimated'
import React, { Component, useMemo, useState } from "react";
import { Dimensions, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Provider from 'react-redux'
import Store from 'stores'

import axios from 'axios'

import Auth from 'components/Auth';
import MainNavigator from 'components/MainNavigator';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export const URL = "http://192.168.8.101:3000"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { user: null }
  }

  onLoged = (user) => {
    this.setState({ user })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* {this.state.user == null ? <Auth onLoged={this.onLoged} /> : <MainNavigator user={this.state.users} />} */}
        <Text>Hello</Text>
      </View>
    )
  }

}