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
import Provider from 'react-redux'
import Store from 'stores'
import Auth from 'components/Auth';
import MainNavigator from 'components/MainNavigator';

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height


export default class App extends Component {

  componentDidMount() {

  }

  render() {
    return <Text>Hello</Text>
  }

}