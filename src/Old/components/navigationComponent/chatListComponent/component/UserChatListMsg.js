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
import UserChatListHeader from "./UserChatListHeader"

export default ({ data }) => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ marginBottom: 60}}
                showsVerticalScrollIndicator={false}
                renderItem={FetchList}
                keyExtractor={(item) => item.id} data={data}
                ListHeaderComponent={<UserChatListHeader data={data} />}
            />
        </View>
    )
}

const FetchList = ({ item }) => {
    return (
        <TouchableOpacity style={styles.msgContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.imageContainer}>
                    <Image source={item.image} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.text}>{item.firstName}</Text>
                    <Text style={styles.text}>Vous: Bonjour</Text>
                </View>
            </View>
            <View>
                <Text style={styles.text}>22h:30mn</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH - 10,
        marginHorizontal: 5,
        marginVertical: 5,
        shadowOpacity: 0.9,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000"
    },
    msgContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "green",
        paddingBottom: 10,
        paddingTop: 10,
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginHorizontal: 5
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        borderRadius: 100
    },
    text: {
        fontSize: 16,
        marginHorizontal: 8,
        fontStyle: "italic"
    }
})
