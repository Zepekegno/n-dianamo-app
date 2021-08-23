import React, { Component } from "react";
import {
    Text,
    View
} from "react-native";

import Icons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Data user
import { ListUser } from "utils/Listuser";

//Component
import CardUser from "./explore/CardUser";
import Explore from "./explore/Explore";
import HeaderContent from "./explore/HeaderContent";

import Header from "./HeaderComponent";
import FilterScreen from "./FilterScreen";


export default class ExploreScreen extends Component {

    //Configure navigator screen
    static BottomTabNavigationOptions = (props) => {
        return {
            title: 'Explore',
            tabBarIcon: ({color }) => {
                return <Icons name='fire' size={25} color={color} />
            },
        }
    }

    state = {
        bottomSheetVisible: false,
    }

    // component for empty card
    emptyCard = () => {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#FFF",
                shadowOpacity: 0.5,
                shadowOffset: { width: 0, height: 5 },
                shadowColor: '#000',
                elevation: 20,
                padding: 40,
                flexDirection: 'row'
            }}>
                <Text style={{
                    fontSize: 20
                }}>Oops il n'y a plus de matches</Text>
                <MaterialIcons name="emoticon-sad" size={25} color='tomato' />
            </View>
        )
    }

    //Render component for each item
    renderCard = (item, index, opacity) => {
        return (
            <Explore key={index} item={item} opacity={opacity} />
        )
    }

    openBottomSheet = () => {
        this.setState({ bottomSheetVisible: true })
    }

    closeBottomSheet = () => {
        this.setState({ bottomSheetVisible: false })
    }

    render() {
        return (
            <>
                <Header component={<HeaderContent onPress={this.openBottomSheet} />} />
                <View style={{ flex: 1 }}>
                    <CardUser
                        data={ListUser}
                        renderCard={this.renderCard}
                        emptyCard={this.emptyCard}
                    />
                </View>
                <FilterScreen
                    visible={this.state.bottomSheetVisible}
                    hide={this.closeBottomSheet} />
            </>
        )
    }
}