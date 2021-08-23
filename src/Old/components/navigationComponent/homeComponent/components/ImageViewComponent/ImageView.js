import { ANTIQUEWHITE_COLOR, AQUAMARINE_COLOR, DIMGRAY_COLOR } from "colors/ConstantColors"
import React from "react"
import { Animated, View } from "react-native"
import { Card } from "react-native-elements"

export const ImageView = ({
    height,
    width, 
    panHandlers,
    rotateAndTranslate,
    gesture,
    nextCardOpacity,
    nextCardScale,
    id, children }) => {
    if (gesture) {
        return (
            <Animated.View
                {...panHandlers}
                style={[
                    rotateAndTranslate,
                    {
                        height: height - 120,
                        width: width,
                        padding: 10,
                        position: 'absolute',
                        backgroundColor:ANTIQUEWHITE_COLOR

                    }
                ]}
            >
                {children != null && children}
            </Animated.View>
        )
    } else {
        return (
            <Animated.View
                style={[
                    {
                        opacity: nextCardOpacity,
                        transform: [{ scale: nextCardScale }],
                        height: height - 120,
                        width: width,
                        padding: 15,
                        position: 'absolute',

                    }
                ]}
            >
                {children != null && children}
            </Animated.View>
        )
    }

}
