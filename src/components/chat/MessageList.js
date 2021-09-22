import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ListUser } from 'utils/Listuser'
import HeaderList from './HeaderList'
import { BLUE_COLOR } from 'colors/ConstantColors'
import Message from 'Dump/Message'
import { useGetMessage } from 'hooks/useGetMessage'
import { useGetNavigation } from 'hooks/useGetNavigation'

const AVATAR_SIZE = 70
const MARGIN = 20

const MessageList = () => {
    const msg = Message()
    const userConnect = 1
    const navigation = useGetNavigation()
    const [getMessage, countMessageWithId] = useGetMessage(msg, userConnect, null, ListUser)

    const itemInfo = (value, count, read, user = {}) => {
        if (value == false && count > 0) return <Badge value={count} containerStyle={{ width: 20, height: 20 }} />
        if (value == true && read == false) return (
            <Ionicons name="checkmark-circle-outline" size={20} />
        )
        if (value == true && read == true) return <Avatar source={user?.image} containerStyle={{
            width: 20,
            height: 20,
            backgroundColor: '#F8F8F8'
        }} avatarStyle={{
            borderRadius: 20
        }} />
    }

    const countMsg = (value) => {
        let count = 0
        countMessageWithId.forEach(item => {
            if (item == value) {
                count = count + 1
            }
        })
        return count
    }

    const gotoChat = (user) => {
        navigation.navigate('Message', { user })
    }

    return (
        <ScrollView>
            <HeaderList data={ListUser} />
            {getMessage.map((item, index) => {
                const user = item.user
                const countMessage = countMsg(user.id, countMessage)
                const arraySpliteMsg = item.message.split(' ')
                const content = arraySpliteMsg.length > 3 ?
                    `${arraySpliteMsg[0]} ${arraySpliteMsg[1]} ${arraySpliteMsg[2]}...` : item.message
                const getTime = new Date(item.time)
                const times = `${getTime.getHours()}:${getTime.getMinutes()}`

                return (
                    <TouchableOpacity style={styles.msg} key={index} onPress={() => gotoChat(user)}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Avatar source={user.image} containerStyle={{
                                height: AVATAR_SIZE,
                                width: AVATAR_SIZE,
                            }} avatarStyle={{
                                borderRadius: AVATAR_SIZE
                            }} />
                            <View style={{ paddingHorizontal: MARGIN / 2 }}>
                                <Text style={styles.msgTitle}>{user.firstName} {user.lastName}</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[
                                        styles.msgContent,
                                        {
                                            fontWeight: item.id_sender != userConnect && countMessage > 0 ? 'bold' : 'normal'
                                        }
                                    ]}>{item.id_sender == userConnect ? 'Vous:' : ''} {content}</Text>
                                    <Text style={styles.msgTimes}>{times}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {item.id_sender != userConnect && itemInfo(false, countMessage)}
                            {item.id_sender == userConnect && itemInfo(true, 0, item.read, user)}
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
    )
}

export default MessageList

const styles = StyleSheet.create({
    msg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: MARGIN,
        marginVertical: MARGIN / 2
    },
    msgTitle: {
        fontSize: 15,
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    msgContent: {
        color: '#222',
        fontSize: 15
    },

    msgTimes: {
        fontWeight: '300',
        color: BLUE_COLOR,
        paddingHorizontal: 5
    }
})