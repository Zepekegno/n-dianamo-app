import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
export default ({ item }) => {
    const navigation = useNavigation()
    const uri = "http://192.168.8.101:8081/src" + item.image[0].source
    const nameConcat = item.firstname + ' ' + item.lastname
    const split = nameConcat.split(' ')
    const name = split.length > 2 ? `${split[0]} ${split[1]}` : split.join(' ')

    return (
        <TouchableWithoutFeedback>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>
                    <Image style={styles.image} source={{ uri }} />
                </View>
                <View style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5
                }}>
                    <Text style={{ fontSize: 18, opacity: 0.7 }}>{name} </Text>
                    <Icons {...LikedType(item.matchType)} style={{ marginHorizontal: 10 }} />
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