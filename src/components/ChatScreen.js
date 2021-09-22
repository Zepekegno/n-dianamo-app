import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Ionicons from 'react-native-vector-icons/Ionicons'

import Discussion from "./chat/Discussion";
import { Avatar } from "react-native-elements";
import { ListUser } from "utils/Listuser";
import { TouchableOpacity, View } from "react-native";
import { ROYALBLUE_COLOR } from "colors/ConstantColors";

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
                <ChatStack.Screen name='Discussions' component={Discussion}
                    options={{
                        headerRight: () => (
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TouchableOpacity activeOpacity={1} style={{ marginHorizontal: 18 }}>
                                    <Ionicons name="search" size={20} />
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{ marginRight: 5 }}>
                                    <Ionicons name="ellipsis-vertical" size={20} />
                                </TouchableOpacity>
                            </View>
                        ),
                    }}
                />
            </ChatStack.Navigator>
        )
    }
}