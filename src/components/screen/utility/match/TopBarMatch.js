import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

export default () => {
    return (
        <View style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginTop: StatusBar.currentHeight
        }}>
            <Text style={{
                fontSize: 20,
                color: '#fff',
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                textShadowColor: '#222',
                textTransform: 'uppercase',
                marginLeft: 10
            }}>Match</Text>
            {/* <TouchableOpacity style={{
                marginRight: 5
            }}>
                <Icons name="ellipsis-vertical" size={20} color="#fff" />
            </TouchableOpacity> */}
        </View>

    )
}