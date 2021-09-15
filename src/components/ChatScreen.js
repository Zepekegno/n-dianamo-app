import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from 'react-native-vector-icons/Ionicons'

import Discussion from "./chat/Discussion";

const ChatStack = createStackNavigator()

export default class ChatScreen extends Component {

    static BottomTabNavigationOptions = (props) => {
        return {
            tabBarIcon: ({ focused, color }) => {
                return <Ionicons name='chatbubbles' size={25} color={color} />
            },
            tabBarBadge: 2,
        }
    }

    render() {

        return (
            <ChatStack.Navigator>
                <ChatStack.Screen name='Messages' component={Discussion} />
            </ChatStack.Navigator>
        )
    }
}