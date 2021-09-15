import React, { useEffect, useState } from 'react'
import { FlatList, View } from 'react-native'
import { ListUser } from 'utils/Listuser'
import HeaderList from './HeaderList'
import MessageList from './MessageList'

//const users = ListUser

export default (props) => {

    return (
        <View style={{ backgroundColor: '#FFF', flex: 1 }}>
            <FlatList
                renderItem={MessageList}
                keyExtractor={(item, index) => item.id}
                data={ListUser}
                ListHeaderComponent={HeaderList}
            />
        </View>
    )
}