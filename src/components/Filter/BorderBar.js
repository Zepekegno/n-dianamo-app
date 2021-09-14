import React, { Component } from "react";
import { SCREEN_WIDTH } from "App";
import { DIMGRAY_COLOR } from "colors/ConstantColors";
import { View } from "react-native";

export default class BorderBar extends Component {
    render = () => {
        return (
            <View style={{
                backgroundColor: DIMGRAY_COLOR,
                paddingHorizontal: SCREEN_WIDTH / 2 - 150,
                paddingVertical: 2,
                marginTop: 2,
                alignSelf: 'center'
            }} />
        )
    }
}