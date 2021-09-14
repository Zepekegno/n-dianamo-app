import { createStackNavigator } from "@react-navigation/stack";
import React, { Component, useRef } from "react";
import { PanResponder, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

import Icons from 'react-native-vector-icons/SimpleLineIcons'

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

    menu = () => {
        return (
            <View>
                <TouchableOpacity>
                    <Text>Matche d'aujourd'huit</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Match d'il y a 2 jours</Text>
                </TouchableOpacity>
            </View>
        )
    }

    isShow = (show = true) => {
        !show ? this.setState({ isVisible: false }) : this.setState({ isVisible: show })
    }

    render() {
        return (
            <>
                <MenuContextuel render={this.menu} isVisible={this.state.isVisible} />
                <StackHeader.Navigator>
                    <StackHeader.Screen name="Matches" options={{
                        headerRight: ({ tintColor }) => {
                            return (
                                <View>
                                    <TouchableOpacity onPress={this.isShow}>
                                        <Icons name="options-vertical" size={20} color={tintColor} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }

                    }}>
                        {(props) => <Matching showMenu={this.isShow} {...props} />}
                    </StackHeader.Screen>
                </StackHeader.Navigator>
            </>
        )
    }
}

const Matching = (props) => {
    const { showMenu } = props
    const pan = useRef(PanResponder.create({
        onStartShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => {
            showMenu(false)
        }
    })).current
    return (
        <Animated.View {...pan.panHandlers}>
            <ScrollView>
                <Matches />
            </ScrollView>
        </Animated.View>
    )
}