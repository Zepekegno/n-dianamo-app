import AuthContext from 'contexts/AuthContext'
import React, { useContext, useRef, useState } from 'react'
import { Animated, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from 'utils/isEmpty'

export default (props) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const context = useContext(AuthContext)
    const animation = useRef(new Animated.Value(0)).current

    const opacity = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
        extrapolate: 'clamp'
    })

    const getEmail = (text) => {
        if (!isEmpty(context.errors.error)) {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: true
            }).start(f => {
                context.errors.setError('')
                animation.setValue(0)
            })
        }
        setEmail(text)
    }
    const getPassword = (text) => {
        if (!isEmpty(context.errors.error)) {
            Animated.spring(animation, {
                toValue: 1,
                useNativeDriver: true
            }).start(f => {
                context.errors.setError('')
                animation.setValue(0)
            })
        }
        setPassword(text)
    }

    const signIn = () => {
        context.signIn(email, password)
    }

    const goto = (go) => {
        props.navigation.navigate(go)
    }

    return (
        <AuthContext.Consumer>
            {({ errors }) => (
                <LinearGradient style={styles.container} colors={['tomato', '#fffafa']}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Connexion</Text>
                        {!isEmpty(errors.error) && (<Animated.View style={[styles.errorBox, { opacity }]}>
                            <Text style={styles.errorText}>{errors.error}</Text>
                        </Animated.View>)}
                    </View>
                    <View style={styles.box}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                textContentType="emailAddress"
                                placeholder="example@gmail.com"
                                style={styles.input}
                                onChangeText={getEmail}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                placeholder="password"
                                style={styles.input}
                                secureTextEntry={true}
                                onChangeText={getPassword}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={signIn}>
                        <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={e => goto('ForgotPassword')} style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>forgot password</Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity style={styles.googleSignIn}>
                            <Icons name="md-logo-google" size={20} color="red" />
                            <Text style={styles.googleSignInText}>google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.googleSignIn}>
                            <Icons name="md-logo-facebook" size={20} color="blue" />
                            <Text style={[styles.googleSignInText, { color: 'blue' }]}>facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formSignUp}>
                        <Text style={styles.formSignUpText}>Vous n'avez pas de compte ?</Text>
                        <TouchableOpacity onPress={e => goto('Register')}>
                            <Text style={[styles.formSignUpText, { color: 'tomato', opacity: 1, }]}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            )}
        </AuthContext.Consumer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    header: {
        position: 'relative',
        paddingVertical: 30
    },
    headerText: {
        fontSize: 25,
        fontWeight: '700',
        textTransform: 'uppercase',
        color: '#fffafa',
        textAlign: 'center',
        marginBottom: 10
    },
    errorBox: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    errorText: {
        fontSize: 20,
        color: 'darkred',
        fontWeight: '700',
        marginRight: 10,
        textTransform: 'lowercase'
    },
    box: {

    },
    inputContainer: {
        backgroundColor: '#fffafa',
        paddingHorizontal: 10,
        borderRadius: 15,
        marginBottom: 10
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: "#ff6347",
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        textTransform: 'uppercase',
        color: '#fffafa',
        fontWeight: '700',
        fontSize: 20
    },
    forgotPassword: {
        marginTop: 30,
        alignSelf: 'center'
    },
    forgotPasswordText: {
        color: '#191970',
        fontSize: 18,
        textTransform: "capitalize",
        fontWeight: "700"
    },
    googleSignIn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        borderRadius: 10,
        marginTop: 30,
        elevation: 3,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    googleSignInText: {
        marginHorizontal: 10,
        fontSize: 20,
        color: '#222',
        textTransform: 'capitalize',
        opacity: 0.7
    },
    formSignUp: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },
    formSignUpText: {
        fontSize: 20,
        marginHorizontal: 5,
        color: '#222',
        opacity: 0.7,
        fontWeight: "700"
    }
})