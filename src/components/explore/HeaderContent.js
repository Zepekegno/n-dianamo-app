import { DIMGRAY_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'

export default ({onPress}) => {

    const show = ()=>{
        onPress()
    }
    return (
        <>
            <Text style={{
                fontSize: 22,
                color: DIMGRAY_COLOR,
                marginHorizontal: 10
            }}>FindMe</Text>
            <TouchableOpacity style={styles.headerRightBtn} onPress={show}>
                <Ionicons name="filter" size={25} />
                <Text style={styles.headerRightBtnText}>Filter</Text>
            </TouchableOpacity>
        </>
    )
}

//Styles
const styles = StyleSheet.create({
    // Header Right style
    headerRightBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        // borderColor:"#fff",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 5,
        backgroundColor: '#F8F8F8',
        borderRadius: 10
    },
    headerRightBtnText: {
        fontSize: 18,
        color: '#222',
        marginHorizontal: 5
    },
})