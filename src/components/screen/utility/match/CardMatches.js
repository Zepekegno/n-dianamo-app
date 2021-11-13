import { SCREEN_WIDTH } from 'config/config'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const GAP = 5
const CARD_WIDTH = SCREEN_WIDTH / 2.5
const CARD_HEIGHT = CARD_WIDTH / 2 * 3

export default ({ children }) => {
    const width = SCREEN_WIDTH / 2
    return (
        <View style={[styles.container, { width }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: CARD_HEIGHT,
        padding: GAP * 2,
    },
})