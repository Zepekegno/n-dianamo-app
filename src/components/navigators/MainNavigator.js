//Import react and library
import React, { Component } from "react";
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { APP_COLOR__PRIMARY, APP_HEADER_BACKGROUND_PRIMARY, APP_SHADOW_COLOR__PRIMARY } from 'config/config';

//Import Screen
import ChatScreen from "../screen/ChatScreen";
import ExploreScreen from "../screen/ExploreScreen"
import MatchScreen from "../screen/MatchScreen";
import TabarIcon from "components/utility/TabarIcon";
import ProfileScreen from "components/screen/ProfileScreen";

const BottomTab = createBottomTabNavigator()


export default class MainNavigator extends Component {

    render() {
        return (
            <BottomTab.Navigator
                screenOptions={(props) => ({
                    tabBarIcon: ({ focused, color }) => props.route.name == 'Chat' ?
                        (<TabarIcon name="chatbubbles" size={20} color={color} {...props} />)
                        : props.route.name == 'Explore'
                            ? (<TabarIcon name="md-flame" size={20} color={color}{...props} />)
                            : props.route.name == 'Match'
                                ? (<TabarIcon name="md-heart" size={20} color={color}{...props} />)
                                : props.route.name == "Profile" ? (<TabarIcon name="md-person" size={20} color={color}{...props} />) : null,
                })}

                tabBarOptions={{
                    tabStyle: {
                        backgroundColor: APP_HEADER_BACKGROUND_PRIMARY,
                        padding: 0,
                        margin: 0
                    },
                    activeTintColor: APP_COLOR__PRIMARY,
                    inactiveTintColor: 'rgba(255,255,255,0.5)',
                    labelStyle: {
                        fontSize: 14,
                        textTransform: 'uppercase',
                    },
                    showLabel: false,
                    showIcon: true,
                    renderBadge: (route) => (
                        <View style={{
                            width: 20,
                            height: 20,
                            backgroundColor: '#fff',
                            right: 25,
                            bottom: 5,
                            borderRadius: 20
                        }}>

                        </View>
                    )
                }}

                initialRouteName="Explore">
                <BottomTab.Screen name="Explore" component={ExploreScreen} />
                <BottomTab.Screen name="Match" component={MatchScreen} />
                <BottomTab.Screen name="Chat" component={ChatScreen} />
                <BottomTab.Screen name="Profile" component={ProfileScreen} />
            </BottomTab.Navigator>
        )
    }
}