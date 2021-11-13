import React from 'react'
import { Badge } from "react-native-elements"
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default (value, count, read, user = { image: [{ source: null }] }) => {

    let uri = { uri: null }
    if (user.image[0].source != null) {
        uri = { uri: user.image[0].source }
    }


    if (value == false && count > 0)
        return <Badge value={count}
            status="error"
            containerStyle={{ width: 20, height: 20 }} />
    if (value == true && read == false)
        return (<Ionicons name="checkmark-circle-outline" size={20} />)
    if (value == true && read == true)
        return <Avatar source={uri} containerStyle={{
            width: 20,
            height: 20,
            backgroundColor: '#F8F8F8'
        }} avatarStyle={{
            borderRadius: 20
        }} />
}