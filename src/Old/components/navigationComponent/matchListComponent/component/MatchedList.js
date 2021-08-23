import React from "react"
import { Image, TouchableOpacity, View, StyleSheet } from "react-native"
import { Text } from "react-native-elements"
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={{ alignItems: 'center' }}>
                <View style={{ width: 85, height: 85, marginHorizontal: 5 }}>
                    <Image source={item.image} style={styles.image} />
                </View>
                <Text style={{ fontSize: 18, paddingTop: 5 }}>{item.firstName}</Text>
                <MaterialIcons name={item.matched == 1 ? 'heart' : 'star'} size={20} color={item.matched == 1 ? "#b22222" : "#00ced1"} />

            </TouchableOpacity>
            <View style={styles.leftItem}>
                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                    <MaterialIcons name="heart" size={40} color="#b22222" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                    <MaterialIcons name="star" size={40} color="#00ced1" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: 10 }}>
                    <MaterialIcons name="close" size={40} color="#696969" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    leftItem: {
        flexDirection: 'row',
        paddingHorizontal: 5
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 50
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: StyleSheet.hairlineWidth
    }
})