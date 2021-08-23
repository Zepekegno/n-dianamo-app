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
import { Dimensions, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Import Navigation
import Main from 'components/Main';
import Auth from 'components/Auth';
import Messages from 'components/Messages';
import ShowProfleScreen from 'components/ShowProfleScreen';

const UserAuth = true

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height

const Stack = createStackNavigator()

export default class App extends Component {

  render() {

    if (!UserAuth) {
      return (
        <Auth />
      )
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator >
            <Stack.Screen name="Main" component={Main} options={{
              headerShown: false
            }} />
            <Stack.Screen
              name="Messages"
              component={Messages}
              options={(params) => Messages.navigationOptions(params)}/>
            <Stack.Screen name="ModalComponent" component={ModalCompnent} options={{
            }} />
             <Stack.Screen name="ShowProfile" component={ShowProfleScreen} options={ShowProfleScreen.navigationOptions} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }

}

const ModalCompnent = () => {
  return <Text>Modal Matches</Text>
}
