import React from "react"
import { Animated, Text } from "react-native"

export const ItemItextLeft = ({opacity}) => {
    return (
        <Animated.View
            style={{
                opacity: opacity,
                transform: [{ rotate: "-30deg" }],
                position: "absolute",
                top: 50,
                left: 40, 
                zIndex: 1000
            }}
        >
            <Text
                style={{
                    borderWidth: 1,
                    borderColor: "green",
                    color: "green",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10
                }}
            >
                LIKE
            </Text>
        </Animated.View>
    )
}