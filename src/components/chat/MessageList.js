import { BLUE_COLOR, DIMGRAY_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Avatar } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons'

const AVATAR_SIZE = 70
const MARGIN = 20

export default (props) => {
    const { item, index } = props
    const text = 'Bonjour tout le monde vous allez bien'
    return (
        <TouchableOpacity style={styles.msg}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Avatar source={item.image} containerStyle={{
                    height: AVATAR_SIZE,
                    width: AVATAR_SIZE,
                }} avatarStyle={{
                    borderRadius: AVATAR_SIZE
                }} />
                <View style={{ paddingHorizontal: MARGIN / 2 }}>
                    <Text style={styles.msgTitle}>{item.firstName} {item.lastName}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.msgContent}>Vous: {text.substr(0, 15)}</Text>
                        <Text style={styles.msgTimes}>maint...</Text>
                    </View>
                </View>
            </View>
            <View style={{}}>
                <Ionicons name="checkmark-done" size={20} />
            </View>
        </TouchableOpacity>
    )
}

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