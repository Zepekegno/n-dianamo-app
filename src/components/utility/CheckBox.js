import { CRIMSON_COLOR } from 'colors/ConstantColors'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'


export default ({ onChecked, textStyle, color, title }) => {
    const [checked, setCheked] = useState(false)
    const onCheck = () => {

        if (!checked) {
            setCheked(true)
        } else if (checked) {
            setCheked(false)
        }
        onChecked(checked)
    }
    return (
        <TouchableOpacity activeOpacity={1} onPress={onCheck}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingVertical: 10,
                paddingHorizontal: 5
            }}>
                {!checked && (
                    <Icons name="checkbox-outline"
                        color={!color ? CRIMSON_COLOR : color} size={25}
                        style={{ marginHorizontal: 8 }} />
                )}
                {checked && (
                    <View style={{
                        width: 20,
                        height: 20,
                        borderWidth: 0.5,
                        marginHorizontal: 8
                    }} />
                )}
                {!title && (<Text style={[!textStyle ? styles.checkBoxText : textStyle]}>{title}</Text>)}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkBoxText: {
        marginHorizontal: 5,
        fontSize: 18,
        fontStyle: 'italic',
        textTransform: 'capitalize',
        opacity: 0.7
    }
})