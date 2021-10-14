import React, { useState } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux'
import { ADD_USER_YEAR } from 'stores/reducers/registerReducers'
import isEmpty from 'utils/isEmpty'
import AnimatInput from '../AnimatInput'

export default (props) => {
    const [year, setYear] = useState()
    const [errors, setErrors] = useState({ error: false, year: false })

    const dispatch = useDispatch()

    /** Get year input content */
    const getYear = (text) => {
        setYear(text)
        !isEmpty(errors) ? setErrors('') : null
    }

    /** Get handle next form input */
    const nextForm = () => {
        if (isEmpty(year)) {
            setErrors({ ...errors, error: true, year: true })
            return
        }

        dispatch({ type: ADD_USER_YEAR, payload: { year } })
        props.navigation.navigate('Gender')
    }

    /** Get handle prev form input */
    const PrevForm = () => {
        props.navigation.goBack()
    }

    return (
        <LinearGradient style={{ flex: 1 }} colors={['#fffafa', 'tomato']}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Quelle est votre date de naissance ?</Text>
                        {!errors.error && (<Text style={styles.titleSub}>Choisissez votre date de naissance</Text>)}
                        {errors.error && (
                            <View style={styles.error}>
                                <Text style={styles.errorTitle}>Veuillez Entrer une date naissance correct svp !</Text>
                                <Icons name="md-alert-circle" size={18} color="red" style={styles.errorIcon} />
                            </View>
                        )}
                    </View>
                    <View style={{ flexBasis: '100%' }}>
                        <AnimatInput
                            title="Votre age"
                            placeholder="1/1/1970"
                            onChangeText={getYear}
                            multiline={false}
                            borderColor={errors.year}
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
        paddingHorizontal: 20
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
        color: "#FFF",
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: '700'
    },
})