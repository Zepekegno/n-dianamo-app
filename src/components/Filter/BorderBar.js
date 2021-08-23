import { SCREEN_HEIGHT } from "App";
import { DIMGRAY_COLOR } from "colors/ConstantColors";
import React, { Component } from "react";
import { Animated, PanResponder, Text } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons'

export default class BorderBar extends Component {
    constructor(props) {
        super(props)
        const height = SCREEN_HEIGHT / 2

        const pan = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderRelease: (e, state) => {
                if (state.dy / height > 0.02) {
                    this.props.touchEnd()
                }
            }
        })

        this.state = {
            pan
        }
    }
    render = () => {
        return (
            <Animated.View style={{
                position: 'absolute',
                left: 80,
                backgroundColor: DIMGRAY_COLOR,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 10,
                flexDirection: 'row'
            }} {...this.state.pan.panHandlers}>
                <Text style={{
                    color: "#FFF",
                    fontSize: 18,
                    marginHorizontal: 5
                }}>Glisser vers le bas</Text>
                <Ionicons name="chevron-down-outline" size={30} color='#FFF' style={{
                    marginHorizontal: 5
                }} />
            </Animated.View>
        )
    }
}