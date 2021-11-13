import AvatarLayout from 'components/utility/AvatarLayout'
import React from 'react'
import { View, TouchableOpacity, Text, StatusBar } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

export default ({ onPress, isVisible }) => {

    return (
        <View style={{
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 10
        }}>
            <Text style={{
                fontSize: 20,
                color: '#fff',
                textShadowOffset: { width: -1, height: 1 },
                textShadowColor: '#222',
                textShadowRadius: 10,
                textTransform: 'uppercase',
                marginHorizontal: 15
            }}>N'dianamo</Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <TouchableOpacity onPress={onPress} style={{
                    marginRight: 15
                }}>

                    {!isVisible && <Icons name="options" size={30} color="#fff" />}
                    {isVisible && <Icons name="close" size={30} color="#fff" />}

                </TouchableOpacity>
            </View>
        </View>
    )
}