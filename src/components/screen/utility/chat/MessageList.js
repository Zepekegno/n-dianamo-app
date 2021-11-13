import React, { Component } from 'react'
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { BLUE_COLOR, CRIMSON_COLOR } from 'colors/ConstantColors'
import { useGetMessage } from 'hooks/useGetMessage'
import { useGetNavigation } from 'hooks/useGetNavigation'
import CheckIconType from './utilities/CheckIconType'
import { connect } from 'react-redux'

const AVATAR_SIZE = 60
const MARGIN = 20

class MessageList extends Component {

    state = {
        data: [],
        countMessageWithId: 0
    }

    componentDidMount() {
        const { messages, users, logedId } = this.props
        const [getMessage, countMessageWithId] = useGetMessage(messages,
            logedId, null, users)
        this.setState({ data: getMessage, countMessageWithId })
    }

    countMsg = (value) => {
        let count = 0
        this.state.countMessageWithId.forEach(item => {
            if (item == value) {
                count = count + 1
            }
        })
        return count
    }

    gotoChat = (user) => {
        const navigation = useGetNavigation()
        navigation.navigate('Message', { user })
    }

    render() {

        return (
            <ScrollView style={{
                backgroundColor: "#fff"
            }}>
                {this.state.data.map((item, index) => {
                    const user = item.user
                    const countMessage = this.countMsg(user.id, countMessage)
                    // const arraySpliteMsg = item?.message.split(' ')
                    // const content = arraySpliteMsg.length > 3 ?
                    //     `${arraySpliteMsg[0]} ${arraySpliteMsg[1]} ${arraySpliteMsg[2]}...` : item.message
                    const getTime = new Date(item.time)
                    const times = `${getTime.getHours()}:${getTime.getMinutes()}`

                    return (
                        <TouchableOpacity style={styles.msg} key={index} onPress={() => this.gotoChat(user)}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Avatar source={{ uri: user.image[0]?.source }} containerStyle={{
                                    height: AVATAR_SIZE,
                                    width: AVATAR_SIZE,
                                }} avatarStyle={{
                                    borderRadius: AVATAR_SIZE
                                }} />
                                <View style={{
                                    marginLeft: 15
                                }}>
                                    <Text style={styles.msgTitle}>{user.firstname} {user.lastname}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[
                                            styles.msgContent,
                                            {
                                                fontWeight: item.id_sender != this.state.logedId && countMessage > 0 ? 'bold' : 'normal'
                                            }
                                        ]}>{item.id_sender == this.state.logedId ? 'Vous:' : ''} {item.message.length > 40 ? item.message.substr(0, 40) : item.message}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={styles.msgTimes}>{times}</Text>
                                {item.id_sender != this.props.logedId && CheckIconType(false, countMessage)}
                                {item.id_sender == this.props.logedId && CheckIconType(true, 0, item.read, user)}
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        )
    }

}

const mapStateToProps = state => {
    const data = state.message.data

    return {
        messages: data,
        users: state.users.data,
        logedId: state.login.logedId
    }
}

export default connect(mapStateToProps)(MessageList)

const styles = StyleSheet.create({
    msg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: MARGIN / 2,
        marginVertical: MARGIN / 2
    },
    msgTitle: {
        fontSize: 18,
        textTransform: 'capitalize',
        marginBottom: 5
    },
    msgContent: {
        color: '#222',
        fontSize: 15,
        marginTop: 0
    },

    msgTimes: {
        fontWeight: '300',
        color: BLUE_COLOR,
        paddingHorizontal: 5,
        marginBottom: 5
    }
})