import AuthContext from 'contexts/AuthContext'
import React, { useContext, useRef, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USER_NAME } from 'stores/reducers/registerReducers'
import isEmpty from 'utils/isEmpty'
import AnimatInput from '../AnimatInput'

export default (props) => {
    const [firstname, setFirstname] = useState('l')
    const [lastname, setLastname] = useState('m')
    const [errors, setErrors] = useState({ error: false, firstname: false, lastname: false })

    const dispatch = useDispatch()

    const getFirstname = (text) => {
        setFirstname(text)
        !isEmpty(errors) ? setErrors('') : null
    }
    const getLastname = (text) => {
        setLastname(text)
        !isEmpty(errors) ? setErrors('') : null
    }

    const nextForm = () => {
        if (isEmpty(firstname) && !isEmpty(lastname)) {
            setErrors({ ...errors, error: true, firstname: true })
            return
        } else if (isEmpty(lastname) && !isEmpty(firstname)) {
            setErrors({ ...errors, error: true, lastname: true })
            return
        } else if (isEmpty(firstname) && isEmpty(lastname)) {
            setErrors({ ...errors, error: true, firstname: true, lastname: true })
            return
        }

        dispatch({ type: ADD_USER_NAME, payload: { firstname, lastname } })
        props.navigation.navigate('Year')
    }

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Comment vous appelez vous?</Text>
                    {!errors.error && (<Text style={styles.titleSub}>Entrez votre nom et votre prenom</Text>)}
                    {errors.error && (
                        <View style={styles.error}>
                            <Text style={styles.errorTitle}>Veuillez entrer votre nom et votre prenom</Text>
                            <Icons name="md-alert-circle" size={18} color="red" style={styles.errorIcon} />
                        </View>
                    )}
                </View>
                <View style={styles.boxContainer}>
                    <AnimatInput
                        value={firstname}
                        placeholder="First name"
                        onChangeText={getFirstname}
                        multiline={false}
                        borderColor={errors.firstname}
                    />
                    <AnimatInput
                        value={lastname}
                        placeholder="first name"
                        onChangeText={getLastname}
                        multiline={false}
                        borderColor={errors.lastname}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={nextForm}>
                    <Text style={styles.buttonText}>NEXT</Text>
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
        fontWeight: '700'
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
        fontSize: 16,
        opacity: 0.7
    },
    errorIcon: {
        marginLeft: 10
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    button: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 20,
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