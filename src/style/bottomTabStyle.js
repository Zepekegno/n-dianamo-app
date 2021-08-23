import { getWidth } from "components/MainNavigation";
import React from "react";
const { StyleSheet, Dimensions } = require("react-native");

export const bottomTabStyle = StyleSheet.create({
    tabBarContainer: {
        backgroundColor: "#FFF",
        paddingHorizontal: 20
    },
    filterIconStyle: {
        width: 60,
        height: 60,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 50
    },
    viewIndicatorStyle: {
        backgroundColor: "red",
        width:getWidth(),
        height: 2,
        position: 'absolute',
        bottom: 20,
        left: 50,
        borderRadius: 50,
    }
})
