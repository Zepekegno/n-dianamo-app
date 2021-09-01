import React, { Component } from "react";
import {
    Text,
    TouchableOpacity,
    View
} from "react-native";

import Icons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { createStackNavigator } from "@react-navigation/stack";
import MainExplore from "./explore/MainExplore";

const stackNavigator = createStackNavigator()

export default class ExploreScreen extends Component {

    //Configure navigator screen
    static BottomTabNavigationOptions = (props) => {
        return {
            title: 'Explore',
            tabBarIcon: ({ color }) => {
                return <Icons name='fire' size={25} color={color} />
            },
        }
    }

    state = {
        bottomSheetVisible: false,
    }



    openBottomSheet = () => {
        this.setState({ bottomSheetVisible: true })
    }

    closeBottomSheet = () => {
        this.setState({ bottomSheetVisible: false })
    }

    render() {
        return (
            <stackNavigator.Navigator>
                <stackNavigator.Screen name='Explore' component={MainExplore} options={{
                    headerRight: () => {
                        return (
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                                marginHorizontal: 5,
                                backgroundColor: '#F8F8F8',
                                borderRadius: 10
                            }} onPress={this.openBottomSheet}>
                                <Ionicons name="filter" size={25} />
                                <Text style={{
                                    fontSize: 18,
                                    color: '#222',
                                    marginHorizontal: 5
                                }}>Filter</Text>
                            </TouchableOpacity>
                        )
                    }
                }} />
            </stackNavigator.Navigator>
        )
    }
}