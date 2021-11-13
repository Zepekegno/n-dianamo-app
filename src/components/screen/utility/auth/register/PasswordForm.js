import AuthContext from 'contexts/AuthContext'
import React, { useContext, useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USER_PASSWORD } from 'stores/reducers/registerReducers'
import isEmpty from 'utils/isEmpty'
import AnimatInput from '../AnimatInput'

export default (props) => {
    const [password, setPassword] = useState()
    const [conf, setConf] = useState(false)
    const [errors, setErrors] = useState({ error: false, conf: false })
    const context = useContext(AuthContext)
    const state = useSelector(state => state?.register)
    const dispatch = useDispatch()

    /** Get password input content */
    const getPassword = (text) => {
        setPassword(text)
        !isEmpty(errors) ? setErrors('') : null
    }

    /** Get handle sign up form input */
    const signUp = () => {

        if (isEmpty(password)) {
            setErrors({ ...errors, error: true })
            return
        } else if (password.length < 6) {
            setErrors({ ...errors, error: true })
            return
        } else if (conf == false) {
            setErrors({ ...errors, conf: true })
            return
        }
        dispatch({ type: ADD_USER_PASSWORD, payload: { password } })
        context.signUp(state)
    }

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#fffafa', 'tomato']}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Choisissez votre mot de passe</Text>
                        {!errors.error && (<Text style={styles.titleSub}>Créez un mot de passe d'au moins 6 caractères, de preference quelque chose que les autres ne peuvent pas deviner.</Text>)}
                        {errors.error && (
                            <View style={styles.error}>
                                <Text style={styles.errorTitle}>Votre mot de passe doit contenir au moins 6 lettres, chiffres et symboles.</Text>
                                <Icons name="md-alert-circle" size={18} color="red" style={styles.errorIcon} />
                            </View>
                        )}
                    </View>
                    <View style={styles.boxContainer}>
                        <AnimatInput
                            title="Password"
                            placeholder="password"
                            onChangeText={getPassword}
                            multiline={false}
                            secure={true}
                            borderColor={errors.error}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingBottom: 20,
                    }}>
                        <TouchableOpacity onPress={() => {
                            setConf(!conf)
                            if (errors.conf) setErrors({ ...errors, conf: false })
                        }} style={{ alignSelf: 'flex-start', marginHorizontal: 20 }}>
                            <View style={{
                                width: 20,
                                height: 20,
                                borderRadius: 20,
                                borderWidth: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: conf ? 'green' : null,
                                flexBasis: '10%'
                            }} >
                                {conf && (
                                    <View style={{
                                        backgroundColor: 'green',
                                        width: 10,
                                        height: 10,
                                        borderRadius: 10
                                    }} />
                                )}
                                {errors.conf && (
                                    <View style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 20,
                                        borderWidth: 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderColor: 'red'
                                    }} />
                                )}
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            flexBasis: '90%'
                        }}>
                            <Text style={{ fontSize: 18, }}>Acceptez vous nos </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 18, color: 'blue' }}>conditions de sevice,</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18 }}>notre </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 18, color: 'blue' }}>Politique d'utilisation des données </Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18 }}>et notre </Text>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 18, color: 'blue' }}>Politique d'utilisation des cookies </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={signUp}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 10,
    },
    header: {
        marginBottom: 20
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700'
    },
    titleSub: {
        color: '#222',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 20,
        lineHeight: 25
    },
    error: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20
    },
    errorTitle: {
        color: 'red',
        fontSize: 16
    },
    errorIcon: {
        marginLeft: 10
    },
    boxContainer: {
        paddingHorizontal: 20,
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 60
    },
    buttonText: {
        color: "#fffafa",
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: '700'
    },
})