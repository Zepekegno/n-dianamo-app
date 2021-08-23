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
        backgroundColor: '#FFF',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#222',
        flex: 1,
        padding: 10
    }
})
