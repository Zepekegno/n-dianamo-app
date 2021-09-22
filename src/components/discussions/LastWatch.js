import { DIMGRAY_COLOR, WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({ lastWatch }) => {
    return (
        <View style={{
            backgroundColor: DIMGRAY_COLOR,
            elevation: 3,
            paddingVertical: 2,
            paddingHorizontal: 15,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 10,
            borderRadius: 15
        }}>
            <Text style={{
                color: '#222',
                fontSize: 16,
                fontFamily: 'Montserrat_600SemiBold',
                color: '#FFF'
            }}>{lastWatch}</Text>
        </View>
    )
}