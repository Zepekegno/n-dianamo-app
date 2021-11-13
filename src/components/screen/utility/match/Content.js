import React from 'react'
import { StyleSheet, View } from 'react-native'

export default (props) => {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    }
})
