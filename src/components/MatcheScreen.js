import React, { Component } from "react";
import { ScrollView} from "react-native";

import Icons from 'react-native-vector-icons/SimpleLineIcons'

import Header from "./HeaderComponent";
import HeaderContent from "./matches/HeaderContent";
import Matches from "./matches/Matches";


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

    render() {
        return (
            <>
                <Header component={<HeaderContent />} />
                <ScrollView>
                    <Matches/>
                </ScrollView>
            </>
        )
    }
}