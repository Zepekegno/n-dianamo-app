import React from 'react'
import { View } from 'react-native'
import MessageList from './MessageList'
import Message from 'Dump/Message'

//const users = ListUser

export default (props) => {
    const msg = Message()
    return (
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
            <MessageList />
        </View >
    )
}