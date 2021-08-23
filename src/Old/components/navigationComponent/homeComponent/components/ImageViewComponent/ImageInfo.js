import { WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Compasant info de chaque users

export const ImageInfo = ({data}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`${data.firstName}, ${data.age}`}</Text>
            <View style={{flexDirection:"row", alignItems:'center'}}>
                <MaterialIcons name="map-marker" size={20} style={{
                    color:'red'
                }}/>
                <Text style={styles.textMargin}>{data.ville}</Text>
            </View>
        </View>
    )
}

// les Styles
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        alignItems:'flex-start',
        marginBottom:30,
    },
    text:{
        fontSize:25,
        fontWeight:"700",
        textTransform:'capitalize',
        marginVertical:10,
        color:"#222"
    },
    textMargin:{
        marginHorizontal:10,
        fontSize:20,
        fontWeight:"700",
        textTransform:'capitalize',
        color:"#222"
    }
})