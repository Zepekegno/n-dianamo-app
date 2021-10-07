import React, { useRef, useState } from "react"
import { Animated, StyleSheet, TextInput, View } from "react-native"

export default ({ placeholder, onChangeText, multiline, value, borderColor, placehold }) => {
    const [height, setHeight] = useState(null)
    const [placeholderWidth, setPlaceholderWidth] = useState(null)
    const [isColor, setIsColor] = useState(false)
    const animation = useRef(new Animated.Value(0)).current

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -height / 2]
    })
    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -placeholderWidth / 4]
    })
    const scale = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    })
    const animate = (val) => {
        val == 1 ? setIsColor(true) : setIsColor(false)
        Animated.spring(animation, {
            toValue: val,
            bounciness: 0,
            useNativeDriver: true
        }).start()
    }
    onFocus = () => {
        setIsColor(true)
        animate(1)
    }
    onBlur = () => {
        setIsColor(false)
        !value && animate(0)
    }

    return (
        <View
            style={[styles.inputContainer, { borderColor: borderColor ? "red" : "#222" }]}
            onLayout={e => !height && setHeight(e.nativeEvent.layout.height)}
        >
            <View style={{
                height, ...styles.placeholderContainer
            }}>
                <Animated.Text style={[
                    styles.placeholder,
                    {
                        transform: [{ translateY }, { scale }, { translateX }],
                        color: isColor ? "blue" : "#222"
                    }
                ]} onTextLayout={e => !placeholderWidth && setPlaceholderWidth(e.nativeEvent.lines[0]?.width || 0)}>
                    {placeholder}
                </Animated.Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                onFocus={onFocus}
                onBlur={onBlur}
                multiline={multiline}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 5,
        borderColor: '#999',
        marginBottom: 20,
        marginTop: 10,
        borderBottomWidth: 1,
    },
    input: {
        fontSize: 18,
        marginTop: 15,
    },
    placeholderContainer: {
        position: 'absolute',
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    placeholder: {
        fontSize: 18,
        position: 'absolute',
        marginHorizontal: 5,
        paddingHorizontal: 5,
        opacity: 0.7
    }
})