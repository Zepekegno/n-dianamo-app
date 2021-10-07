import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USER_EMAIL, ADD_USER_YEAR } from 'stores/reducers/registerReducers'
import isEmail from 'utils/isEmail'
import isEmpty from 'utils/isEmpty'
import AnimatInput from '../AnimatInput'

export default (props) => {
    const [email, setEmail] = useState('ff')
    const [errors, setErrors] = useState({ error: false })

    const dispatch = useDispatch()

    const getEmail = (text) => {
        setEmail(text)
        !isEmpty(errors) ? setErrors('') : null
    }

    const nextForm = () => {
        console.log(isEmail(email))
        if (isEmpty(email)) {
            setErrors({ ...errors, error: true })
            return
        } else if (!isEmail(email)) {
            setErrors({ ...errors, error: true })
            return
        }

        dispatch({ type: ADD_USER_EMAIL, payload: { email } })
        props.navigation.navigate('Password')
    }
    const PrevForm = () => {
        props.navigation.goBack()
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Entrez votre adresse email?</Text>
                    {!errors.error && (<Text style={styles.titleSub}>Entrez votre adresse email pour pouvoir vous connecter.</Text>)}
                    {errors.error && (
                        <View style={styles.error}>
                            <Text style={styles.errorTitle}>Veuillez Entrer une adresse email valide</Text>
                            <Icons name="md-alert-circle" size={18} color="red" style={styles.errorIcon} />
                        </View>
                    )}
                </View>
                <View style={styles.boxContainer}>
                    <AnimatInput
                        value={email}
                        placeholder="email"
                        onChangeText={getEmail}
                        multiline={false}
                        borderColor={errors.error}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={PrevForm}>
                        <Text style={styles.buttonText}>PREV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={nextForm}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
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
        marginBottom: 20
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