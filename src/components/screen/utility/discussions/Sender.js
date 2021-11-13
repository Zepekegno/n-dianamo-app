import { SCREEN_WIDTH } from 'App'
import { DIMGRAY_COLOR, WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ item, image, last }) => {
    const getTime = new Date(item.time)
    const times = `${getTime.getHours()}:${getTime.getMinutes()}`

    console.log('sender :', last)

    return (
        <View style={{ alignSelf: 'flex-end', justifyContent: 'center' }}>
            <View style={styles.msBoxS}>
                <Text style={styles.msTextS} selectable={true} selectionColor='#222'>{item.message}</Text>
                <Text style={{ alignSelf: 'flex-end', color: '#fff', marginTop: 5 }}>{times}</Text>
            </View>
            {last != null && last.id == item.id && (
                <Avatar source={{ uri: last.image[0].source }}
                    containerStyle={{
                        borderWidth: 1,
                        borderColor: 'blue',
                        width: 20,
                        height: 20,
                        borderRadius: 20,
                        padding: 2,
                        alignSelf: 'flex-end'
                    }}
                    avatarStyle={{
                        borderRadius: 20,
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    msBoxS: {
        alignSelf: 'flex-end',
        marginHorizontal: 15,
        backgroundColor: '#dc143c',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 10,
        maxWidth: 250 - 15
    },
    msTextS: {
        fontSize: 16,
        color: WHITE_COLOR,
    },
})