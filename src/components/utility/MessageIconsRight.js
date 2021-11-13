import React from "react"
import { TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

export default (props) => {

    const { route, navigation, color } = props


    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <TouchableOpacity style={{
                marginHorizontal: 10
            }}>
                <Ionicons name="call-outline" color={color} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginHorizontal: 10
            }}>
                <Ionicons name="videocam-outline" color={color} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginHorizontal: 5
            }}>
                <Ionicons name="ellipsis-vertical" color={color} size={20} />
            </TouchableOpacity>
        </View>
    )
}