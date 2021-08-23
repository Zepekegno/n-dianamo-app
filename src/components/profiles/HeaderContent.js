import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import Icons from 'react-native-vector-icons/SimpleLineIcons'

import { DIMGRAY_COLOR } from 'colors/ConstantColors'

export default (props) => {
    const { onPress } = props

    return (
        <>
            <Text style={{
                fontSize: 22,
                color: DIMGRAY_COLOR,
                marginHorizontal: 10
            }}>Profile</Text>
            <TouchableOpacity onPress={() => onPress(true)}>
                <Icons name="options-vertical" size={20} />
            </TouchableOpacity>
        </>
    )
}