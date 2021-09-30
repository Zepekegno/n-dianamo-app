//Import react and library
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BLUE_COLOR, CRIMSON_COLOR, DIMGRAY_COLOR } from "colors/ConstantColors";
import React, { Component } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons'

//Import Screen
import ChatScreen from "./ChatScreen";
import ExploreScreen from "./ExploreScreen"
import MatcheScreen from "./MatcheScreen";
import ProfileScreen from "./ProfileScreen";

const BottomTab = createBottomTabNavigator()


export default class Main extends Component {

    render() {
        const tabBarOptions = this.tabBarOptions()
        return (
            <BottomTab.Navigator initialRouteName="Explore" tabBarOptions={tabBarOptions}>
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
                    component={MatcheScreen}
                    options={(params) => MatcheScreen.BottomTabNavigationOptions(params)} />
                <BottomTab.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={(params) => ChatScreen.BottomTabNavigationOptions(params)} />
                <BottomTab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ focused, color }) => {
                            return <Ionicons name='md-person' size={25} color={color} />
                        }
                    }}
                />
            </BottomTab.Navigator>
        )
    }


    tabBarOptions() {
        return {
            activeTintColor: BLUE_COLOR,
            inactiveTintColor: DIMGRAY_COLOR,
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
                backgroundColor: ''
            }
        }
    }

    styles = () => {
        return {
            headerRightBtn: {
                flexDirection: 'row',
                alignItems: 'center',
                // borderWidth: 1,
                // borderColor:"#fff",
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