import { BLACK_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ item, image, last }) => {
    const getTime = new Date(item.time)
    const times = `${getTime.getHours()}:${getTime.getMinutes()}`
    return (
        <View style={{ alignItems: "flex-start", justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar source={{ uri: image }}
                        containerStyle={{
                            borderWidth: 1,
                            borderColor: 'blue',
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            padding: 2,
                            alignSelf: 'flex-end'
                        }}
                        avatarStyle={{
                            borderRadius: 30,
                        }}
                    />
                    <View style={styles.msBoxR}>
                        <Text style={styles.msTextR} selectable={true} selectionColor='#3cb371' textBreakStrategy='highQuality'>{item.message}</Text>
                        <Text style={{ alignSelf: 'flex-end' }}>{times}</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    msBoxR: {
        alignSelf: 'flex-start',
        marginHorizontal: 5,
        backgroundColor: '#d1d1d1',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginVertical: 5,
        maxWidth: 250 - 15
    },
    msTextR: {
        fontSize: 16,
        color: BLACK_COLOR,
    }
})