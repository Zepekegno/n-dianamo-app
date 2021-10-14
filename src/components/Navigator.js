import React, { useContext, useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-elements';

import Ionicons from 'react-native-vector-icons/Ionicons'

import { navigationRef } from 'hooks/useGetNavigation';
import MessagesScreen from './MessagesScreen';
import MainNavigator from './MainNavigator';
import { CRIMSON_COLOR } from 'colors/ConstantColors';
import AvatarLayout from './AvatarLayout';

const Stack = createStackNavigator()

export default (props) => {

    return (
        <>
            <StatusBar backgroundColor={CRIMSON_COLOR} />
            <NavigationContainer ref={navigationRef} >
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={MainNavigator} options={({ navigation, route }) => ({
                        title: "N'dianamo",
                        headerStyle: {
                            backgroundColor: CRIMSON_COLOR
                        },
                        headerRight: () => (
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around'
                            }}>
                                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                    <Ionicons name="search-outline" size={28} color="#fff" />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                                    <Ionicons name="list-circle-outline" size={28} color="#fff" />
                                </TouchableOpacity>
                            </View>
                        ),
                        headerLeft: () => (<AvatarLayout />),
                        headerTitleStyle: {
                            fontSize: 20,
                            fontWeight: "700",
                            textTransform: "uppercase",
                            color: "#fff"
                        }
                    })} />
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
        </>
    )
}