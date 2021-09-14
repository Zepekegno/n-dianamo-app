import React from 'react'
import {
    Image,
    Text,
    View,
    Animated,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native'

import {
    CRIMSON_COLOR,
    DIMGRAY_COLOR,
    SEAGREEN_COLOR,
    WHITE_COLOR
} from 'colors/ConstantColors'

import Ionicons from 'react-native-vector-icons/Ionicons'
import { SCREEN_WIDTH } from 'App'
import { IsEmpty } from 'utils/IsEmpty'

export default ({ item, animated }) => {
    const scale = IsEmpty(animated) ? 1 : animated.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp'
    })

    return (
        <>
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
                        <TouchableWithoutFeedback>
                            <View>
                                <Text style={styles.cardInfoTitle}>{item.firstName} {item.lastName}, {item.age}</Text>
                                <Text style={styles.cardInfoSubTitle}>
                                    Je suis un ingénieur capable de s’adapter et apprendre très rapidement
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <Animated.View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity style={styles.iconLikedBtn}>
                                <Ionicons name="heart" size={30} color='tomato' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconLikedBtn}>
                                <Ionicons name="star" size={30} color={SEAGREEN_COLOR} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconLikedBtn}>
                                <Ionicons name="close" size={30} color={CRIMSON_COLOR} />
                            </TouchableOpacity>
                        </Animated.View>
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
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.55,
        marginHorizontal: 10,
        marginTop: 20
    }
})