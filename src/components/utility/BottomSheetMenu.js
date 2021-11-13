import React, { memo, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Dimensions, PanResponder, StatusBar, StyleSheet, View } from "react-native";

const BottomSheetMenu = ({
    children, isVisible,
    onLineSlide, top,
    contentContainerStyle, line,
    lineAnimated, borderRadius }) => {

    // const [iniPos, setIniPos] = useState(isVisible)
    const { height } = Dimensions.get('window')
    const animation = useRef(new Animated.Value(1)).current


    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, height]
    })

    const pan = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (e, gesture) => {
            if (Math.ceil(gesture.dy) > 20) {
                positionBottomSheet(1, onLineSlide)
            }
        },
        onPanResponderRelease: (e, gesture) => { }
    })).current

    const positionBottomSheet = (pos, args) => {
        Animated.spring(animation, {
            toValue: pos,
            mass: 40,
            damping: 80,
            overshootClamping: true,
            useNativeDriver: true,
        }).start(({ f }) => args && args())
    }

    useMemo(() => {
        if (isVisible) {
            positionBottomSheet(0)
        } else if (!isVisible) {
            positionBottomSheet(1)
        }
    }, [isVisible])

    return (
        <Animated.View style={[styles.container, {
            transform: [{ translateY }],
            top,
            borderRadius
        }]}>

            {line && lineAnimated && (
                (<Animated.View {...pan.panHandlers} style={styles.barStyle}>
                    <View style={styles.bar} />
                </Animated.View>)
            )}

            <View style={contentContainerStyle}>
                {children}
            </View>
        </Animated.View>
    )

}

BottomSheetMenu.defaultProps = {
    top: StatusBar.currentHeight + 60,
    line: true,
    borderRadius: 15,
    lineAnimated: true,
    isVisible: true,
    contentContainerStyle: {
        // borderWidth: 1,
        // paddingHorizontal: 10,
        // paddingVertical: 5
    }
}

export default BottomSheetMenu

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: '#fff',
        width: '100%',
        height: "100%",
        elevation: 10
    },
    barStyle: {
        marginHorizontal: 20,
        marginBottom: 30,
        paddingVertical: 5
    },
    bar: {
        backgroundColor: '#222',
        opacity: 0.5,
        height: 5,
        width: 120,
        alignSelf: 'center',
        borderRadius: 50
    }
})