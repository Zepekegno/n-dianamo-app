import React from "react"
import { SCREEN_WIDTH } from "App"
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native"

export default ({ data }) => {
    return (
        <View style={styles.containerHeader}>
            <FlatList
            showsHorizontalScrollIndicator={false}
                horizontal renderItem={FetchHederList}
                keyExtractor={(item, index) => item.id} data={data}/>
        </View>
    )
}

const FetchHederList = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.text}>{item.firstName}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
        alignItems: 'center',
        paddingTop: 12,
        paddingLeft: 15,
        height: 130,
        width: SCREEN_WIDTH,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 20 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    imageContainer: {
        width: 80,
        height: 80,
        marginHorizontal: 5,
    }
    ,
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 100
    },
    text: {
        textAlign: 'center',
        paddingTop: 8,
        fontSize: 16,
        textTransform: 'capitalize',
        fontWeight: '700'
    }
})
