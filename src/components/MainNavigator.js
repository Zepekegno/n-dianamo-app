//Import react and library
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createStackNavigator } from "@react-navigation/stack";
import { CRIMSON_COLOR } from "colors/ConstantColors";
import React, { Component } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'

//Import Screen
import ChatScreen from "./ChatScreen";
import ExploreScreen from "./ExploreScreen"
import MatchScreen from "./MatchScreen";

const BottomTab = createMaterialTopTabNavigator()


export default class MainNavigator extends Component {

    render() {
        const tabBarOptions = this.tabBarOptions()
        return (
            <BottomTab.Navigator
                swipeEnabled={false}
                initialRouteName="Explore"
                tabBarOptions={tabBarOptions}>
                <BottomTab.Screen
                    name="Explore"
                    component={ExploreScreen}
                    options={{
                        title: 'Explore',
                        tabBarIcon: ({ color }) => {
                            return <Ionicons name='md-flame' size={25} color={color} />
                        }

                    }}
                />
                <BottomTab.Screen
                    name="Matches"
                    component={MatchScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            return <Ionicons name='md-heart' size={25} color={color} />
                        }
                    }} />
                <BottomTab.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={(params) => ChatScreen.BottomTabNavigationOptions(params)} />
            </BottomTab.Navigator>
        )
    }


    tabBarOptions() {
        return {
            activeTintColor: '#fff',
            inactiveTintColor: "#222",
            showIcon: true,
            showLabel: false,
            labelStyle: {
                fontSize: 15,
                margin: 0,
                padding: 0,
                textTransform: 'uppercase',
            },
            iconStyle: {
                margin: 0,
                padding: 0,
                color: CRIMSON_COLOR
            },
            tabStyle: {
                backgroundColor: CRIMSON_COLOR
            }
        }
    }

    styles = () => {
        return {
            headerRightBtn: {
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginHorizontal: 5,
                backgroundColor: '#F8F8F8',
                borderRadius: 10
            },
            headerRightBtnText: {
                fontSize: 18,
                color: '#222',
                marginHorizontal: 5
            },
        }
    }
}