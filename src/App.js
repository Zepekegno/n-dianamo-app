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
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Import Navigation
import Main from 'components/Main';
import Auth from 'components/Auth';
import Messages from 'components/Messages';
import ShowProfleScreen from 'components/ShowProfleScreen';
import { navigationRef } from 'hooks/useGetNavigation';
import { Avatar } from 'react-native-elements';

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
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator >
            <Stack.Screen name="Main" component={Main} options={{
              headerShown: false
            }} />
            <Stack.Screen
              name="Message"
              component={Messages}
              options={({ route, navigation }) => ({
                headerTitle: () => {
                  return <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}>
                    <Avatar source={route.params.user.image} containerStyle={{
                      width: 35,
                      height: 35,
                      borderWidth: 1,
                      borderColor: 'blue',
                      padding: 2,
                      borderRadius: 35
                    }} avatarStyle={{
                      borderRadius: 35
                    }} />
                    <Text style={{
                      fontSize: 16,
                      fontWeight: '700',
                      marginHorizontal: 10,
                      textTransform: 'uppercase'
                    }}>{route.params.user.firstName}</Text>
                  </View>
                },
                headerRight: () => {
                  return (
                    <View style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                      <TouchableOpacity style={{
                        marginHorizontal: 10
                      }}>
                        <Ionicons name="call-outline" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{
                        marginHorizontal: 10
                      }}>
                        <Ionicons name="videocam-outline" size={20} />
                      </TouchableOpacity>
                      <TouchableOpacity style={{
                        marginHorizontal: 5
                      }}>
                        <Ionicons name="ellipsis-vertical" size={20} />
                      </TouchableOpacity>
                    </View>
                  )
                },
              })} />
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
