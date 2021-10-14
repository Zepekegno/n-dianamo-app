import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import isEmail from 'utils/isEmail'
import isEmpty from 'utils/isEmpty'

export default (props) => {
    const [email, setEmail] = useState()
    const [error, setError] = useState()

    const getEmail = (text) => {
        if (!isEmpty(error)) {
            setError('')
        }

        setEmail(text)
    }

    const onSearch = () => {
        if (isEmpty(email)) {
            setError('Entrer votre email')
            return
        }

        if (!isEmail(email)) {
            setError('Entrez un email valide ')
            return
        }

        props.navigation.navigate('GetToken')
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
                    }}>Entrez votre adresse email</Text>
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
                    backgroundColor: '#d1d1d1 ',
                    marginHorizontal: 5,
                    borderRadius: 12,
                    marginTop: 20
                }}>
                    <TextInput
                        placeholder="Adresse email"
                        style={{
                            paddingHorizontal: 20,
                            fontSize: 18
                        }}
                        onChangeText={getEmail}
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
                    onPress={onSearch}
                >
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '700',
                        color: '#fffafa'
                    }}>Trouver votre compte</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}