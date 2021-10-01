import { SCREEN_WIDTH, URL } from "App";
import { DIMGRAY_COLOR } from "colors/ConstantColors";
import React, { Component, useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

export default class Auth extends Component {

    state = {
        email: '',
        password: '',
        loading: false
    }

    onChangeEmail = (email) => {
        this.setState({ email })
    }

    onChangePassword = (password) => {
        this.setState({ password })
    }

    onLogin = () => {

    }

    onCreate = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>N'dianamo</Text>
                <View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='example@gmail.com'
                            style={styles.input}
                            textContentType="emailAddress"
                            value={this.state.email}
                            onChangeText={this.onChangeEmail}
                        />
                        <View style={styles.icons}>
                            <Icons name="mail" size={25} />
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder='password'
                            style={styles.input}
                            secureTextEntry={true}
                            value={this.state.password}
                            onChangeText={this.onChangePassword}
                        />
                        <View style={styles.icons}>
                            <Icons name="md-lock-closed" size={25} />
                        </View>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={[
                        styles.button,
                    ]} onPress={this.onLogin} disabled={this.state.loading}>

                        {!this.state.loading ? (
                            <Text style={{
                                color: "#FFF",
                                fontWeight: "700",
                                fontSize: 18,
                                textTransform: 'uppercase'
                            }}>Se Connecter</Text>
                        ) : (
                            <ActivityIndicator size="small" color="#FFF" style={{ flex: 1 }} />
                        )}

                    </TouchableOpacity>
                    <TouchableOpacity style={[
                        styles.button,
                    ]} onPress={this.onCreate}>
                        <Text style={{
                            color: "#FFF",
                            fontWeight: "700",
                            fontSize: 18,
                            textTransform: 'uppercase'
                        }}>Créer un Compte</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00008b",
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        color: "#FFF",
        fontSize: 25,
        marginVertical: 10,
        fontWeight: "700",
        textTransform: 'uppercase'
    },
    inputBox: {
        borderWidth: 1,
        width: 300,
        marginVertical: 10,
        backgroundColor: '#FFF',
        borderRadius: 20,
        justifyContent: 'center',
        position: 'relative'
    },
    icons: {
        position: 'absolute',
        right: 0,
        bottom: 5,
        marginRight: 10,
        padding: 4
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginVertical: 10,
        backgroundColor: 'tomato'
    },
    btnContainer: {
        flexDirection: 'row'
    },
    input: {
        paddingHorizontal: 30,
        fontSize: 18,
        width: '85%',
    }
})