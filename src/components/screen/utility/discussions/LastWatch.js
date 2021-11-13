import { CRIMSON_COLOR, DIMGRAY_COLOR, WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({ lastWatch }) => {
    return (
        <View style={{
            backgroundColor: CRIMSON_COLOR,
            paddingVertical: 8,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 10,
            borderRadius: 15,
        }}>
            <Text style={{
                color: '#fff',
                fontSize: 16,
                fontFamily: 'Montserrat_600SemiBold',
            }}>{lastWatch}</Text>
        </View>
    )
}