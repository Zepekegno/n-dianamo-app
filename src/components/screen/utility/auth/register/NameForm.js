import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { ADD_USER_NAME } from 'stores/reducers/registerReducers'
import isEmpty from 'utils/isEmpty'
import AnimatInput from '../AnimatInput'

export default (props) => {

    const [firstname, setFirstname] = useState()
    const [lastname, setLastname] = useState()
    const [errors, setErrors] = useState({
        error: false,
        firstname: false,
        lastname: false
    })

    /** Redux state register */
    const dispatch = useDispatch()

    /** Get frist name input content */
    const getFirstname = (text) => {
        setFirstname(text)
        if (errors.firstname == true) setErrors({ ...errors, error: false, firstname: false, lastname: false })
    }

    /** Get last name input content */
    const getLastname = (text) => {
        setLastname(text)
        if (errors.lastname == true) setErrors({ ...errors, error: false, lastname: false, firstname: false })
    }

    /** Get handle next form input */
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
        <LinearGradient style={{ flex: 1 }} colors={['#fffafa', 'tomato']}>
            <ScrollView style={{ flex: 1, }}>
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
                        <View style={{ flexBasis: '50%' }}>
                            <AnimatInput
                                title="Firt name"
                                placeholder="Jhon"
                                onChangeText={getFirstname}
                                multiline={false}
                                borderColor={errors.firstname}
                                onSubmitEditing={nextForm}
                            />
                        </View>
                        <View style={{ flexBasis: '50%' }}>
                            <AnimatInput
                                title="Last Name"
                                placeholder="Does"
                                onChangeText={getLastname}
                                multiline={false}
                                borderColor={errors.lastname}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={nextForm}>
                        <Text style={styles.buttonText}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

/** Styles */
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
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    button: {
        backgroundColor: 'tomato',
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