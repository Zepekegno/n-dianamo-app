import { createStackNavigator } from "@react-navigation/stack";
import React, { Component, useRef } from "react";
import { PanResponder, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import Icons from 'react-native-vector-icons/Ionicons'

import Matches from "./matches/Matches";
import MenuContextuel from "./MenuContextuel";

const StackHeader = createStackNavigator()

export default class MatcheScreen extends Component {

    static BottomTabNavigationOptions = (props) => {
        return {
            tabBarIcon: ({ focused, color }) => {
                return <Icons name='heart' size={25} color={color} />
            },
            tabBarBadge: 3,
            tabBarBadgeStyle: {
                top: -2
            }
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            isVisible: false
        }
    }

    render() {
        return (
            <>
                <StackHeader.Navigator>
                    <StackHeader.Screen name="Matches">
                        {(props) => <Matching {...props} />}
                    </StackHeader.Screen>
                </StackHeader.Navigator>
            </>
        )
    }
}

const Matching = (props) => {
    return (
        <ScrollView>
            <Matches />
        </ScrollView>
    )
}