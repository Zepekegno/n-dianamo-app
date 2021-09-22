import { SCREEN_WIDTH } from 'App'
import { ALICEBLUE_COLOR, BLACK_COLOR, DIMGRAY_COLOR, FIREBRIK_COLOR, WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ item, image }) => {
    const getTime = new Date(item.time)
    const times = `${getTime.getHours()}:${getTime.getMinutes()}`
    return (
        <View style={{ alignItems: "flex-start" }}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Avatar source={image}
                        containerStyle={{
                            alignSelf: 'center',
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
                    </View>
                </View>
                <Text style={{ marginHorizontal: '10%' }}>{times}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    msBoxR: {
        alignSelf: 'flex-start',
        marginHorizontal: 5,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopEndRadius: 15,
        borderTopLeftRadius: 15,
        borderBottomEndRadius: 15,
        marginVertical: 5,
        elevation: 3,
        maxWidth: 250 - 15
    },
    msTextR: {
        fontSize: 18,
        color: BLACK_COLOR,
        lineHeight: 25
    }
})