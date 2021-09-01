import React from 'react'
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'


const AVATAR_SIZE = 70
const SPACING = 15

export default (props) => {
    const { item, index, navigation } = props

    const goto = (e) => {
        navigation.navigate('Messages', { id: index })
    }

    return (
        <TouchableOpacity key={index} onPress={goto}>
            <View style={{
                flexDirection: 'row',
                padding: SPACING,
                backgroundColor: 'rgba(255,255,255,0.9)',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 10 },
                shadowOpacity: 0.8,
                shadowRadius: 20,
                marginBottom:SPACING/3,
                marginHorizontal:SPACING/2,
                borderRadius:10
            }}>
                <Image source={item.image} style={{
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: AVATAR_SIZE,
                    marginRight: SPACING / 2
                }} />
                <View style={{ marginLeft: SPACING / 2 }}>
                    <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.firstName} {item.lastName} </Text>
                    <Text style={{ fontSize: 18, opacity: .7 }}>Hello me comment tus</Text>
                    <Text style={{ fontSize: 16, opacity: .8, color: '#0099cc' }}>il y a 2 min</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}