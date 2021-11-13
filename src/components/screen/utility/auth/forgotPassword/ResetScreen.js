import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import isEmail from 'utils/isEmail'
import isEmpty from 'utils/isEmpty'

export default (props) => {
    const [token, setToken] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confPassword, setConfPassword] = useState()
    const [error, setError] = useState()

    const getNewPassword = (text) => {
        if (!isEmpty(error)) {
            setError('')
        }

        setNewPassword(text)
    }

    const getConfPassword = (text) => {
        if (!isEmpty(error)) {
            setError('')
        }

        setConfPassword(text)
    }

    const onReset = () => {
        if (isEmpty(newPassword) || isEmpty(confPassword)) {
            setError('Entrez votre nouveau mot de passe')
            return
        }

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
                    }}>Entrez votre nouveau mot de passe</Text>
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
                        placeholder="Nouveau mot de passe"
                        style={{
                            paddingHorizontal: 20,
                            fontSize: 18
                        }}
                        onChangeText={getNewPassword}
                    />
                </View>
                <View style={{
                    backgroundColor: '#d1d1d1',
                    marginHorizontal: 5,
                    borderRadius: 12,
                    marginTop: 20
                }}>
                    <TextInput
                        placeholder="Confirmez le mot de passe"
                        style={{
                            paddingHorizontal: 20,
                            fontSize: 18
                        }}
                        onChangeText={getConfPassword}
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
                    onPress={onReset}
                >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#fffafa'
                    }}>Reinitialiser</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}