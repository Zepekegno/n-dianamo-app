import React from 'react'
import { View } from 'react-native'
export default (props) => {
    const { isVisible } = props
    return (
        <View style={{
            position: 'absolute',
            right: 5,
            zIndex: 1000,
            top: 10,
            backgroundColor: '#FFF',
            shadowColor: '#222',
            shadowOpacity: 0.5,
            shadowOffset: { width: 10, height: 10 },
            padding: 10,
            elevation: 10,
            opacity: !isVisible ? 0 : 1
        }}>
            {props.render()}
        </View>
    )
}