import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AQUA_COLOR, RED_COLOR, SEAGREEN_COLOR } from 'colors/ConstantColors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default () => {
    return (
        <>
            <TouchableOpacity style={styles.iconLikedBtn}>
                <MaterialCommunityIcons name="heart" size={20} color={SEAGREEN_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconLikedBtn}>
                <MaterialCommunityIcons name="star" size={20} color={AQUA_COLOR} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconLikedBtn}>
                <MaterialCommunityIcons name="close" size={20} color={RED_COLOR} />
            </TouchableOpacity></>
    )
}

//Styles
const styles = StyleSheet.create(
    {
        iconLikedBtn: {
            backgroundColor: '#FFF',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100,
            marginBottom: 20,
            shadowColor: '#fff',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.55,
        }
    }

)