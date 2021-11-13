import React from "react"
import { Text, View } from "react-native"
import { Avatar } from "react-native-elements"

export default (props) => {

    const { color } = props

    const { user } = props.route.params

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <Avatar source={{ uri: user.image[0].source }} containerStyle={{
                width: 35,
                height: 35,
                borderWidth: 1,
                borderColor: 'blue',
                padding: 2,
                borderRadius: 35
            }} avatarStyle={{
                borderRadius: 35
            }} />
            <Text style={{
                fontSize: 16,
                fontWeight: '700',
                marginHorizontal: 10,
                textTransform: 'uppercase',
                color
            }}>{user.firstname}</Text>
        </View>
    )
}