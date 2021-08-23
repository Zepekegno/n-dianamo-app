import React from "react"
import { Animated, Text } from "react-native"

export const ItemTextRight = ({opacity}) => {
    return (
        <Animated.View
            style={{
                opacity: opacity,
                transform: [{ rotate: "30deg" }],
                position: "absolute",
                top: 50,
                right: 40,
                zIndex: 1000
            }}
        >
            <Text
                style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10
                }}
            >
                NOPE
            </Text>
        </Animated.View>
    )
}