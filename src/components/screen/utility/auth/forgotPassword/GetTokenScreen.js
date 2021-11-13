import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import isEmail from 'utils/isEmail'
import isEmpty from 'utils/isEmpty'

export default (props) => {
    const [token, setToken] = useState()
    const [error, setError] = useState()

    const getToken = (text) => {
        if (!isEmpty(error)) {
            setError('')
        }

        setToken(text)
    }

    const onVerifyToken = () => {
        if (isEmpty(token)) {
            setError('Entrer le code')
            return
        }

        props.navigation.navigate('ResetPassword')
    }
    return (
        <LinearGradient style={{ flex: 1 }} colors={['#fffafa', 'tomato']}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 40,
                position: 'relative'
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    paddingVertical: 30
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#222',
                        opacity: 0.7
                    }}>Entrez le code qui vous a été envoyer</Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700',
                        color: '#222',
                        opacity: 0.7
                    }}>par email</Text>
                    <View style={{
                        position: 'absolute',
                        bottom: 0,
                    }}>
                        {!isEmpty(error) && (
                            <Text style={{
                                fontSize: 16,
                                color: 'red',
                                fontWeight: '700'
                            }}>{error}</Text>
                        )}
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#d1d1d1',
                    marginHorizontal: 5,
                    borderRadius: 12,
                    marginTop: 20
                }}>
                    <TextInput
                        placeholder="Code"
                        style={{
                            paddingHorizontal: 20,
                            fontSize: 18
                        }}
                        onChangeText={getToken}
                    />
                </View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20,
                    backgroundColor: 'tomato',
                    paddingVertical: 10,
                    borderRadius: 15
                }}
                    onPress={onVerifyToken}
                >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#fffafa'
                    }}>Verifier</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}