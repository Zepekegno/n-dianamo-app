import { BLUE_COLOR, DIMGRAY_COLOR } from 'colors/ConstantColors'
import Message from 'Dump/Message'
import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ListUser } from 'utils/Listuser'
import HeaderList from './HeaderList'

const AVATAR_SIZE = 70
const MARGIN = 20

const MessageList = () => {
    const msg = Message()
    const userConnect = '1'
    //je recupere la list de ces messages
    const message = msg.filter((item, index) => {
        if (item.id_receiver == userConnect || item.id_sender == userConnect) return item
    })

    //je recupere la list des utilisateurs à qui il les a envoyer
    //je recupere d'abord les id
    let isInArray = []
    let all = []
    let countArray = []
    message.forEach(el => {
        let ids = null
        const id_receiver = el.id_receiver
        const id_sender = el.id_sender

        if (id_receiver == userConnect && id_sender != userConnect) {
            ids = id_sender
        } else if (id_sender == userConnect && id_receiver != userConnect) {
            ids = id_receiver
        }
        if ((!el.read && el.id_sender == ids) && userConnect == el.id_receiver) {
            countArray.push(parseInt(ids))
        }

        ListUser.forEach((user, index) => {
            if (user.id == ids) {
                if (isInArray.indexOf(user.id) == -1) {
                    all.push({ ...el, user: user })
                    isInArray.push(user.id)
                }
            }
        })
    })

    //const listMessage = list.filter(item => IsEmpty(item.user) == false)

    const itemInfo = (value, count) => {
        console.log(value)
        if (value && count > 0) return <Badge value={count} containerStyle={{ marginRight: 5 }} />
        if (!value) return <Ionicons name="checkmark-done" size={20} />
    }

    const countMsg = (value) => {
        let count = 0
        countArray.forEach(item => {
            if (item == value) {
                count = count + 1
            }
        })
        return count
    }

    return (
        <ScrollView>
            <HeaderList data={ListUser} />
            {all.map((item, index) => {
                const user = item.user
                let countMessage = countMsg(user.id, countMessage)

                return (
                    <TouchableOpacity style={styles.msg} key={index}>
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
                                            fontWeight: item.id_sender == userConnect ? 'bold' : 'normal'
                                        }
                                    ]}>{item.id_sender == userConnect ? 'Vous:' : ''} {item.message.substr(0, 15)}</Text>
                                    <Text style={styles.msgTimes}>{item.time}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {itemInfo((item.id_sender != userConnect), countMessage)}
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
        color: DIMGRAY_COLOR,
        fontSize: 16
    },

    msgTimes: {
        fontWeight: '300',
        color: BLUE_COLOR,
        paddingHorizontal: 5
    }
})

// return (
//     <TouchableOpacity style={styles.msg} key={index}>
//         <View style={{
//             flexDirection: 'row',
//             alignItems: 'center'
//         }}>
//             <Avatar source={item.image} containerStyle={{
//                 height: AVATAR_SIZE,
//                 width: AVATAR_SIZE,
//             }} avatarStyle={{
//                 borderRadius: AVATAR_SIZE
//             }} />
//             <View style={{ paddingHorizontal: MARGIN / 2 }}>
//                 <Text style={styles.msgTitle}>{item.firstName} {item.lastName}</Text>
//                 <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                     <Text style={styles.msgContent}>Vous: {text.substr(0, 15)}</Text>
//                     <Text style={styles.msgTimes}>maint...</Text>
//                 </View>
//             </View>
//         </View>
//         <View style={{}}>
//             <Ionicons name="checkmark-done" size={20} />
//         </View>
//     </TouchableOpacity>
// )