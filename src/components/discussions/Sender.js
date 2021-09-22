import { SCREEN_WIDTH } from 'App'
import { DIMGRAY_COLOR, WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default ({ item }) => {
    const getTime = new Date(item.time)
    const times = `${getTime.getHours()}:${getTime.getMinutes()}`
    return (
        <View style={{ alignSelf: 'flex-end', justifyContent: 'center' }}>
            <View style={styles.msBoxS}>
                <Text style={styles.msTextS} selectable={true} selectionColor='#222'>{item.message}</Text>
            </View>
            <Text style={{ alignSelf: 'flex-end', marginRight: 20 }}>{times}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    msBoxS: {
        alignSelf: 'flex-end',
        marginHorizontal: 15,
        backgroundColor: '#3cb371',
        shadowColor: WHITE_COLOR,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomStartRadius: 15,
        marginVertical: 5,
        elevation: 3,
        maxWidth: 250 - 15
    },
    msTextS: {
        fontSize: 18,
        color: WHITE_COLOR,
        lineHeight: 25
    },
})