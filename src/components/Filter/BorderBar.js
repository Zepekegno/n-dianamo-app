import React, { Component } from "react";
import { SCREEN_WIDTH } from "App";
import { DIMGRAY_COLOR } from "colors/ConstantColors";
import { View } from "react-native";

export default class BorderBar extends Component {
    render = () => {
        return (
            <View style={{
                position: 'absolute',
                backgroundColor: DIMGRAY_COLOR,
                paddingHorizontal: SCREEN_WIDTH / 2 - 150,
                paddingVertical: 2,
                left: '45%',
                top: 2
            }} />
        )
    }
}