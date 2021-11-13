import React from 'react'
import { StyleSheet, View } from 'react-native'
export default (props) => {
    return (
        <View style={{
            position: 'absolute',
            top: 80,
            elevation: 10,
            paddingHorizontal: 5,
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 20,
        }}>
            {props.children}
        </View>
    )
}