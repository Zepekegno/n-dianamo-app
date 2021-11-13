import React from 'react'
import { ActivityIndicator } from 'react-native'

export default ({ size, color }) => {
    const width = size != undefined ? size : 'small'
    const colors = color != undefined ? color : 'grey'
    return <ActivityIndicator animating={true} size={width} color={colors} />
}