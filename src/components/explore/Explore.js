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
    DIMGRAY_COLOR,
    RED_COLOR,
    SEAGREEN_COLOR,
    WHITE_COLOR
} from 'colors/ConstantColors'

import Icons from 'react-native-vector-icons/Ionicons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default ({ item, opacity }) => {
    return (
        <>
            <Animated.View style={{
                position: 'absolute',
                top: 80,
                elevation: 10,
                paddingHorizontal: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 20,
                opacity:opacity

            }}>
                <TouchableOpacity style={styles.iconLikedBtn}>
                    <Ionicons name="heart" size={25} color={SEAGREEN_COLOR} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLikedBtn}>
                    <Ionicons name="star" size={25} color={AQUA_COLOR} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconLikedBtn}>
                    <Ionicons name="close" size={25} color={RED_COLOR} />
                </TouchableOpacity>
            </Animated.View>
            <View style={styles.card}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.cardContent}>
                    <View style={styles.cardInfoBtn}>
                        <Icons name="location-outline" size={18} color={WHITE_COLOR} />
                        <Text style={{
                            color: WHITE_COLOR,
                            marginHorizontal: 5
                        }}>{item.ville}</Text>
                    </View>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardInfoTitle}>{item.firstName} {item.lastName}, {item.age} ans</Text>
                        <Text style={styles.cardInfoSubTitle}>
                            Je suis un ingénieur capable de s’adapter et apprendre très rapidement, ma capacité en travail d’équipe et d’écoute sont excellentes
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
        flex: 4,
        width: null,
        height: null,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    cardContent: {
        flex: 1,
    },
    cardInfo: {
        flex: 4,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingTop: 15
    },
    cardInfoTitle: {
        fontSize: 25,
        alignSelf: 'center'
    },
    cardInfoSubTitle: {
        color: DIMGRAY_COLOR,
        fontSize: 16
    },
    cardInfoBtn: {
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: DIMGRAY_COLOR,
        top: -16,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    iconLikedBtn: {
        backgroundColor: '#FFF',
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginBottom: 50,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.55,
    }
})