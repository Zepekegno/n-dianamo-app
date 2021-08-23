import React, { Component } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

export default class Distances extends Component {
    render = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap'
            }}>
                <CheckBox title="1-10 km" />
                <CheckBox title="10-20 km" />
                <CheckBox title="20-30 km" />
                <CheckBox title="30-40 km" />
                <CheckBox title="40-50 km" />
                <CheckBox title="50+ km" />
            </View>
        )
    }
}