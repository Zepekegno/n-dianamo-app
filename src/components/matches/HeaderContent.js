import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { DIMGRAY_COLOR } from 'colors/ConstantColors'
import Icons from 'react-native-vector-icons/SimpleLineIcons'
export default () => {
    return (
        <>
            <Text style={{
                fontSize: 22,
                color: DIMGRAY_COLOR,
                marginHorizontal: 10
            }}>Matches</Text>
            <TouchableOpacity>
                <Icons name="options-vertical" size={20} />
            </TouchableOpacity>
        </>
    )
}