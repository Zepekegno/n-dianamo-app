import React from 'react'
import {
    Image,
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default ({ item }) => {
    const goto = (id) => {
        console.log('go:', id)
    }
    const split = item.year.split('/')
    const day = parseInt(split[0])
    const month = parseInt(split[1])
    const years = parseInt(split[2])
    const s = new Date(Date.now()).setHours(0, 0, 0, 0).valueOf() - new Date(years, month, day).valueOf()
    const year = Math.round(new Date(s).getTime() / (365 * (24 * 60 * 60 * 1000)))
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image[0].source }} style={styles.image} />
            <TouchableWithoutFeedback onPress={e => goto(item.id)}>
                <View style={styles.info}>
                    <Text style={[styles.textWithShadow, styles.textPrimary]}>{item.firstname}, {year}</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <Ionicons name="location-sharp" size={20} color="#fff" style={styles.icon} />
                            <Text style={[styles.textWithShadow, styles.textSecondary]}>{item.ville}</Text>
                        </View>
                        <View style={{
                            backgroundColor: '#fff',
                            width: 25,
                            height: 10,
                            top: 5,
                            marginHorizontal: 10,
                            elevation: 10
                        }} />
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <Ionicons name="school" size={20} color="#fff" style={styles.icon} />
                            <Text style={[styles.textWithShadow, styles.textSecondary]}>{item.school}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        position: 'relative'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    info: {
        position: 'absolute',
        bottom: 10,
        left: 15,
    },
    textPrimary: {
        color: "#fffafa",
        fontSize: 25
    },
    textSecondary: {
        color: "#fff",
        fontSize: 18,
        marginLeft: 10
    },
    textWithShadow: {
        color: '#fff',
        fontWeight: '700',
        textShadowColor: '#222',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    },
    icon: {
        color: '#fff',
        fontWeight: '700',
        textShadowColor: '#222',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5
    }
})