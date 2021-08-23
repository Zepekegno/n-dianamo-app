import React, { Component } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

export default class FamilyStatus extends Component {
    render = () => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <CheckBox title="Single" />
                <CheckBox title="Maried" />
                <CheckBox title="Divorced" />
            </View>
        )
    }
}