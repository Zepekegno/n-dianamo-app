import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export default ({ item }) => {
    const navigation = useNavigation()
    return (
        <TouchableWithoutFeedback>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>
                    <Image style={styles.image} source={item.image} />
                </View>
                <View style={{ paddingHorizontal: 5, flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, }}>{item.firstName}, {item.age} </Text>
                    < MaterialCommunityIcons {...LikedType(item.likedType)} style={{ marginHorizontal: 10 }} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const LikedType = (type) => {
    let icon = 'heart'
    let color = 'red'
    if (type === 2) {
        icon = 'star'
        color = "green"
    }
    return {
        name: icon,
        color: color,
        size: 20
    }
}


//Styles
const styles = StyleSheet.create(
    {
        image: {
            flex: 1,
            height: null,
            width: null,
            resizeMode: 'cover',
            borderRadius: 15
        }
    }

)