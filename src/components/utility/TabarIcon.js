import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons'
export default (props) => {
    const { size, color, name } = props
    return (
        <Icons name={name} size={size} color={color} />
    )
}