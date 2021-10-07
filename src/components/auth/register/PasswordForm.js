import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { ADD_USER_PASSWORD } from 'stores/reducers/registerReducers'
import isEmpty from 'utils/isEmpty'
import AnimatInput from '../AnimatInput'

export default (props) => {
    const [password, setPassword] = useState()
    const [conf, setConf] = useState(false)
    const [errors, setErrors] = useState({ error: false })

    const dispatch = useDispatch()

    const getPassword = (text) => {
        setPassword(text)
        !isEmpty(errors) ? setErrors('') : null
    }

    const nextForm = () => {

        if (isEmpty(password)) {
            setErrors({ ...errors, error: true })
            return
        }

        dispatch({ type: ADD_USER_PASSWORD, payload: { password } })
        //props.navigation.navigate('Passwor')
    }
    const PrevForm = () => {
        props.navigation.goBack()
    }

    return (
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
                        value={password}
                        placeholder="password"
                        onChangeText={getPassword}
                        multiline={false}
                        borderColor={errors.error}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingBottom: 10
                }}>
                    <TouchableOpacity onPress={() => setConf(!conf)} style={{ alignSelf: 'flex-start', marginHorizontal: 20 }}>
                        <View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: conf ? 'green' : null
                        }} >
                            {conf && (
                                <View style={{
                                    backgroundColor: 'green',
                                    width: 10,
                                    height: 10,
                                    borderRadius: 10
                                }} />
                            )}
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Text style={{ fontSize: 16, }}>Acceptez vous nos </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: 'blue' }}>conditions de sevice</Text>
                        </TouchableOpacity>
                        <Text>, notre</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: 'blue' }}> Politique d'utilisation des données </Text>
                        </TouchableOpacity>
                        <Text>et notre</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: 'blue' }}>Politique d'utilisation des cookies </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={nextForm}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
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
    },
    titleSub: {
        color: '#222',
        opacity: 0.7,
        textAlign: 'center',
        marginTop: 5
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
        paddingHorizontal: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 60
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '700'
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 10
    }
})