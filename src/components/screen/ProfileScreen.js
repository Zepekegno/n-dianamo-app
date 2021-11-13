import { BASE_URL_LOCAL_STORAGE } from "config/config";
import useGetYear from "hooks/useGetYear";
import React, { Component } from "react";
import { Image, Text, FlatList, View, TouchableOpacity, StyleSheet } from "react-native";


//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from "react-redux";
import { CRIMSON_COLOR } from "colors/ConstantColors";
import ProfileImageModal from "./ProfileImageModal";

class ProfileScreen extends Component {

    state = {
        isVisible: false
    }

    render() {

        const { source } = this.props.image
        const { user } = this.props
        const year = useGetYear(user.year)
        const uri = { uri: source }

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <TouchableOpacity onPress={() => this.setState({ isVisible: true })} style={{ flex: 1 }}>
                        <Image source={uri} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{user.firstname} {user.lastname} , {year}</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <TouchableOpacity style={styles.btnInfoContainer}>
                        <View style={styles.btnInfo}>
                            <Ionicons name='person-circle-outline' size={25} color="red" />
                            <Text style={styles.btnInfoText}>Account details</Text>
                        </View>
                        <Ionicons name='chevron-forward' size={25} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInfoContainer}>
                        <View style={styles.btnInfo}>
                            <Ionicons name='image-outline' size={25} color="red" />
                            <Text style={styles.btnInfoText}>Mes photos</Text>
                        </View>
                        <Ionicons name='chevron-forward' size={25} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInfoContainer}>
                        <View style={styles.btnInfo}>
                            <Ionicons name='settings-outline' size={25} color="red" />
                            <Text style={styles.btnInfoText}>settings</Text>
                        </View>
                        <Ionicons name='chevron-forward' size={25} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnInfoContainer}>
                        <View style={styles.btnInfo}>
                            <Ionicons name='call-outline' size={25} color="red" />
                            <Text style={styles.btnInfoText}>contact us</Text>
                        </View>
                        <Ionicons name='chevron-forward' size={25} color="red" />
                    </TouchableOpacity>
                </View>
                <View style={styles.btnLogoutContainer}>
                    <TouchableOpacity style={styles.btnLogout}>
                        <Text style={styles.btnLogoutText}>LogOut</Text>
                        <Ionicons name="log-out" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    const user = state.users.data.filter(val => val.id == state.login.logedId)[0]
    return {
        user,
        image: user.image[0]
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    imageContainer: {
        flex: 1,
        position: 'relative'
    },
    image: {
        flex: 1,
        width: null,
        height: null,
    },
    titleContainer: {
        position: 'absolute',
        bottom: 20,
        left: 10
    },
    titleText: {
        fontSize: 18,
        letterSpacing: 3,
        color: '#fff',
        fontWeight: '200',
        textTransform: 'uppercase',
        textShadowColor: '#000000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    cardContainer: {
        backgroundColor: '#fff',
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 25,
        elevation: 2
    },
    btnInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    btnInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnInfoText: {
        fontSize: 18,
        fontWeight: '700',
        textTransform: 'capitalize',
        opacity: 0.8,
        marginLeft: 20
    },
    btnLogoutContainer: {
        alignSelf: 'center'
    },
    btnLogout: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 25,
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: 'red',
        backgroundColor: CRIMSON_COLOR,
    },
    btnLogoutText: {
        fontSize: 20,
        textTransform: 'capitalize',
        color: '#fff',
        marginRight: 10,
        fontWeight: '700'
    }
})

export default connect(mapStateToProps)(ProfileScreen)