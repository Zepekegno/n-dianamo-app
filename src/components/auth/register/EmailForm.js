import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
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

    /** Get Email input content */
    const getEmail = (text) => {
        setEmail(text)
        !isEmpty(errors) ? setErrors('') : null
    }


    /** Get handle next form input */
    const nextForm = () => {
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

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#fffafa', 'tomato']}>
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
                            title='Email'
                            placeholder="jhondoes@gmail.com"
                            onChangeText={getEmail}
                            multiline={false}
                            borderColor={errors.error}
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={nextForm}>
                        <Text style={styles.buttonText}>NEXT</Text>
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
    },
    titleSub: {
        color: '#222',
        textAlign: 'center',
        marginTop: 5,
        fontSize: 16
    },
    error: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    errorTitle: {
        color: 'darkred',
        fontSize: 16,
        fontWeight: '700'
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