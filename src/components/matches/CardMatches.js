import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, View } from 'react-native'

const GAP = 5
const CARD_WIDTH = (Dimensions.get('window').width / 2) - (GAP * 2)
const CARD_HEIGHT = CARD_WIDTH / 2 * 3

export default (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        padding: GAP,
        marginHorizontal: GAP
    },
})