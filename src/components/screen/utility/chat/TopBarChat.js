import React from "react"
import { StatusBar, Text, TouchableOpacity, View } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'

/** Top bar for chatScreen */
export default () => {
    return (
        <View style={{
            height: 40,
            marginTop: StatusBar.currentHeight || 42
        }}>
            <View style={{
                marginBottom: 15,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#fff',
                    marginLeft: 15,
                    textTransform: 'uppercase',
                    textShadowRadius: 10,
                    textShadowColor: '#222',
                    textShadowOffset: { width: -1, height: 1 }
                }}>Discussion</Text>
                <TouchableOpacity style={{
                    marginRight: 20
                }}>
                    <Ionicons name="search-outline" color='#fff' size={28} />
                </TouchableOpacity>
            </View>
        </View>
    )
}