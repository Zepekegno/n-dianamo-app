import React, { useRef, useState } from "react"
import { Animated, StyleSheet, Text, TextInput, View } from "react-native"

export default ({
    placeholder,
    onChangeText,
    multiline,
    title,
    borderColor,
    onSubmitEditing
}) => {
    const [isColor, setIsColor] = useState(false)

    onFocus = () => {
        setIsColor(true)
    }
    onBlur = () => {
        setIsColor(false)
    }

    return (
        <View style={{
            borderBottomWidth: 1.5,
            borderColor: borderColor ? 'red' : '#222',
            marginRight: 5
        }}>
            <Text style={{
                color: isColor ? 'blue' : "#222",
                fontSize: 20,
            }}>{title}</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => onChangeText(text)}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                multiline={multiline}
                onSubmitEditing={onSubmitEditing}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        marginTop: 15,
        color: "#222"
    },
})