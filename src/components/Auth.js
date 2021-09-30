import { AuthContext, SCREEN_WIDTH } from "App";
import { DIMGRAY_COLOR } from "colors/ConstantColors";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'

export default Auth = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)

    const onLogin = async () => {
        try {
            const params = `?email=${email}&password=${password}`
            setLoading(true)
            const data = await fetch("http://192.168.8.101:3000/users" + params)
            const dataJson = await data.json()
            setLoading(true)
            login(dataJson)
        } catch (e) {
            Alert.alert('Erreur', "imposible d'accedé au serveur reesayez plus tard ")
        }
    }

    const onChangeEmail = (email) => {
        setEmail(email)
    }

    const onChangePassword = (password) => {
        setPassword(password)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>N'dianamo</Text>
            <View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='Pseudo ou email'
                        style={styles.input}
                        textContentType="emailAddress"
                        value={email}
                        onChangeText={onChangeEmail}
                    />
                    <View style={styles.icons}>
                        <Icons name="mail" size={25} />
                    </View>
                </View>
                <View style={styles.inputBox}>
                    <TextInput placeholder='password'
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={onChangePassword}
                    />
                    <View style={styles.icons}>
                        <Icons name="md-lock-closed" size={25} />
                    </View>
                </View>
            </View>
            <TouchableOpacity style={[
                styles.button,
                { backgroundColor: !loading ? '#ff6347' : DIMGRAY_COLOR }
            ]} onPress={onLogin} disabled={loading}>
                <Text style={{
                    color: "#FFF",
                    fontWeight: "700",
                    fontSize: 18,
                    textTransform: 'uppercase'
                }}>{!loading ? 'Se Connecter' : 'patientez svp...'}</Text>
            </TouchableOpacity>
        </View>
    )
}


const INPUT_BOX_SIZE = SCREEN_WIDTH / 2

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
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginVertical: 10
    },
    input: {
        paddingHorizontal: 30,
        fontSize: 18,
        width: '85%',
    }
})