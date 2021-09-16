import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import HeaderList from './HeaderList'
import MessageList from './MessageList'
import Message from 'Dump/Message'
import { ListUser } from 'utils/Listuser'

//const users = ListUser

export default (props) => {
    const msg = Message()
    return (
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
            <MessageList />
        </View >
    )
}