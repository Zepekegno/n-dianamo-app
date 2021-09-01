import React from 'react'
import {
    Animated,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'


const AVATAR_SIZE = 80
const SPACING = 15

export default (props) => {
    const { list, navigation } = props

    const goto = (e) => {
        navigation.navigate('Messages', { id: index })
    }

    return (
        <View View style={{
            flexDirection: 'row',
            padding: SPACING, backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.8,
            shadowRadius: 20
        }}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {list.map((item, index) => (
                    <TouchableOpacity key={index} style={{ position: 'relative' }}>
                        <View style={{ alignItems: 'center', marginRight: SPACING / 2, paddingHorizontal: 5 }}>
                            <Image source={item.image} style={{
                                width: AVATAR_SIZE,
                                height: AVATAR_SIZE,
                                borderRadius: AVATAR_SIZE,
                                marginRight: SPACING / 2,
                                borderColor: 'blue',
                                borderWidth: 1.5
                            }} />
                            <Text style={{ fontSize: 16, marginTop: SPACING / 2 }}>{item.firstName} {item.lastName} </Text>
                        </View>
                        <View style={{
                            backgroundColor: 'tomato',
                            width: 30,
                            height: 30,
                            borderRadius: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            right: 30,
                            top: 50
                        }}>
                            <Text style={{ color: '#fff', fontSize: 15 }}>1</Text>
                        </View>
                    </TouchableOpacity>
                ))
                }
            </ScrollView>
        </View>
    )
}