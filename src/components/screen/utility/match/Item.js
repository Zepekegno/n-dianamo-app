import { useNavigation } from '@react-navigation/native'
import { APP_COLOR__PRIMARY, APP_SHADOW_COLOR__PRIMARY } from 'config/config'
import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View, Image, Text, TouchableOpacity } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import LikedIcon from './LikedIcon'
export default ({ item }) => {
    const navigation = useNavigation()
    const nameConcat = item.firstname + ' ' + item.lastname
    const split = nameConcat.split(' ')
    const name = split.length > 2 ? `${split[0]} ${split[1]}` : split.join(' ')

    return (
        <TouchableOpacity style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, }}>
                    <Image style={styles.image} source={{ uri: item.image[0].source }} />
                </View>
                <View style={{
                    paddingHorizontal: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'absolute',
                    bottom: 0,
                    paddingHorizontal: 15,
                    paddingVertical: 10
                }}>
                    <Text style={{
                        fontSize: 16,
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowColor: APP_SHADOW_COLOR__PRIMARY,
                        textShadowRadius: 1,
                        color: APP_COLOR__PRIMARY,
                        zIndex: 100
                    }}>{name} </Text>
                    <Icons {...LikedIcon(item.matchType)} style={{ elevation: 2, marginHorizontal: 5 }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}


//Styles
const styles = StyleSheet.create(
    {
        image: {
            flex: 1,
            height: null,
            width: null,
            resizeMode: 'cover',
            borderRadius: 15,
        }
    }

)