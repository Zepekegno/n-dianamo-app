import { CRIMSON_COLOR } from 'colors/ConstantColors'
import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'


export default ({ onChecked, item, color, textStyle, containerStyle }) => {

    const [cheked, setChecked] = useState({ val: 0, cheked: true })

    const onCheck = (val) => {
        setChecked({ val, cheked: true })
        onChecked(cheked)
    }

    return item.map(val => (
        <TouchableOpacity key={val.value} onPress={e => onCheck(val.value)}>
            <View style={!containerStyle ? styles.container : containerStyle}>
                {cheked.val == val.value && (
                    <Icons name="radio-button-on-outline"
                        style={{ marginHorizontal: 8 }}
                        size={25}
                        color={!color ? CRIMSON_COLOR : color} />
                )}
                {cheked.val != val.value && (
                    <Icons
                        style={{ marginHorizontal: 8 }}
                        name="radio-button-off-outline"
                        size={25} />
                )}
                <Text style={!textStyle ? styles.radioText : textStyle}>{val.label}</Text>
            </View>
        </TouchableOpacity>
    ))
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    radioText: {
        fontSize: 16,
        fontStyle: 'italic',
        textTransform: 'capitalize',
        opacity: 0.7
    }
})