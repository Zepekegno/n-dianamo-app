import React from 'react'
import { Animated, View } from 'react-native'
import { ListUser } from 'utils/Listuser'
import HeaderMessageList from './HeaderMessageList'
import MessageList from './MessageList'

export default (props) => {
    const { navigation } = props
    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.2)' }}>
            <Animated.FlatList
                ListHeaderComponent={() => HeaderMessageList({ list: ListUser, navigation })}
                renderItem={(props) => MessageList({ ...props, navigation })}
                keyExtractor={(item, index) => item.id}
                data={ListUser}
            />
        </View>
    )
}