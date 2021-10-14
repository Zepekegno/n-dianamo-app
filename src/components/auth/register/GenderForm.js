import AuthContext from 'contexts/AuthContext'
import React, { useContext, useRef, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Animated from 'react-native-reanimated'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_USER_GENDER } from 'stores/reducers/registerReducers'
import isEmpty from 'utils/isEmpty'
import AnimatInput from '../AnimatInput'

export default (props) => {
    const [gender, setGender] = useState({ home: false, femme: false })
    const [error, setError] = useState(false)

    const dispatch = useDispatch()

    const getGender = (type = {}) => {
        const { home, femme } = type
        setGender({ ...gender, home, femme })
        if (error) setError(false)
    }

    const nextForm = () => {

        if (!gender.home && !gender.femme) {
            setError(true)
            return
        }

        let genders = ''

        if (gender.home) {
            genders = 'home'
        } else if (gender.femme) {
            genders = 'femme'
        }
        dispatch({ type: ADD_USER_GENDER, payload: { gender: genders } })
        props.navigation.navigate('Email')
    }
    return (
        <LinearGradient style={{ flex: 1 }} colors={['#fffafa', 'tomato']}>
            <ScrollView style={{ flex: 1, }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Quel est votre genre ?</Text>
                        <View style={styles.errorContainer}>
                            {error && (
                                <View style={styles.error}>
                                    <Text style={styles.errorTitle}>Veuillez selectioner votre genre.</Text>
                                    <Icons name="md-alert-circle" size={18} color="red" style={styles.errorIcon} />
                                </View>
                            )}
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: 10,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            paddingBottom: 10
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>Home</Text>
                            <TouchableOpacity onPress={() => getGender({ femme: false, home: true })}>
                                <View style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: gender.home ? 'red' : null
                                }} >
                                    {gender.home && (
                                        <View style={{
                                            backgroundColor: 'red',
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10
                                        }} />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            paddingBottom: 10
                        }}>
                            <Text style={{ fontSize: 18, fontWeight: '700' }}>Femme</Text>
                            <TouchableOpacity onPress={() => getGender({ femme: true, home: false })}>
                                <View style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 20,
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderColor: gender.femme ? 'red' : null
                                }} >
                                    {gender.femme && (
                                        <View style={{
                                            backgroundColor: 'red',
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10
                                        }} />
                                    )}
                                </View>
                            </TouchableOpacity>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 30,
        marginHorizontal: 10,
    },
    header: {
        marginBottom: 20,
        position: 'relative',
        paddingBottom: 50,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700'
    },
    errorContainer: {
        position: "absolute",
        bottom: 0,
        alignSelf: 'center'
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