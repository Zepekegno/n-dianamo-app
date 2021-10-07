import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
export default () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator animating={true} />
        </View>
    )
}