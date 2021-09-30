import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons'

import { navigationRef } from 'hooks/useGetNavigation';
import MessagesScreen from './MessagesScreen';
import Main from './Main';


const Stack = createStackNavigator()

export default MainNavigator = () => {
    return (
        <NavigationContainer ref={navigationRef} >
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={{
                    headerShown: false
                }} />
                <Stack.Screen
                    name="Message"
                    component={MessagesScreen}
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}