import React, { useRef } from 'react'
import {
    Image,
    Text,
    View,
    Animated,
    TouchableOpacity,
    StyleSheet,
    PanResponder
} from 'react-native'

import {
    AQUA_COLOR,
    CRIMSON_COLOR,
    DIMGRAY_COLOR,
    RED_COLOR,
    SEAGREEN_COLOR,
    WHITE_COLOR
} from 'colors/ConstantColors'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { SCREEN_HEIGHT } from 'App'

export default ({ item }) => {
    return (
        <>
            <Animated.View style={{
                elevation: 10,
                paddingHorizontal: 5,
                alignItems: 'flex-start',
                marginHorizontal: 10,
                position: 'absolute',
                top: SCREEN_HEIGHT / 2 - 280,

            }}>
                <TouchableOpacity style={styles.iconLikedBtn}>
                    <Ionicons name="heart" size={25} color='tomato' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLikedBtn}>
                    <Ionicons name="star" size={25} color={SEAGREEN_COLOR} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLikedBtn}>
                    <Ionicons name="close" size={25} color={CRIMSON_COLOR} />
                </TouchableOpacity>
            </Animated.View>
            <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.cardContent}>
                    <View style={styles.cardInfoBtn}>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                            <Ionicons name="location-outline" size={18} color={WHITE_COLOR} />
                            <Text style={{
                                color: WHITE_COLOR,
                                marginHorizontal: 5,
                                fontSize: 16
                            }}>{item.ville}</Text>
                        </View>
                        <Text style={{ fontSize: 16, color: '#FFF' }}>|</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                            <Ionicons name="school" size={18} color={WHITE_COLOR} />
                            <Text style={{
                                color: WHITE_COLOR,
                                marginHorizontal: 5,
                                fontSize: 16
                            }}>{item.school}</Text>
                        </View>
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>{item.firstName} {item.lastName}, {item.age}</Text>
                        <Text style={styles.cardInfoSubTitle}>
                            Je suis un ingénieur capable de s’adapter et apprendre très rapidement
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    image: {
        flex: 3,
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    cardContent: {

    },
    cardInfo: {
        top: 10,
        paddingVertical: 15,
        paddingHorizontal: 5
    },
    cardInfoTitle: {
        fontSize: 22,
        fontWeight: '700'
    },
    cardInfoSubTitle: {
        color: DIMGRAY_COLOR,
        fontSize: 16,
        marginTop: 5,
        lineHeight: 22
    },
    cardInfoBtn: {
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'tomato',
        top: -10,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 0,
    },
    iconLikedBtn: {
        backgroundColor: '#FFF',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.55,
        marginHorizontal: 10,
        marginTop: 40
    }
})