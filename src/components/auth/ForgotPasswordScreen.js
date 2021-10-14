import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import GetEmailScreen from './forgotPassword/GetEmailScreen'
import GetTokenScreen from './forgotPassword/GetTokenScreen'
import ResetScreen from './forgotPassword/ResetScreen'

const Stack = createStackNavigator()

export default (props) => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: 'tomato',
            },
            headerTintColor: '#fffafa',
            title: 'Retrouver votre compte'
        }}>
            <Stack.Screen name="GetEMail" component={GetEmailScreen} />
            <Stack.Screen name="GetToken" component={GetTokenScreen} />
            <Stack.Screen name="ResetPassword" component={ResetScreen} options={{ title: 'Nouveau mot de passe' }} />
        </Stack.Navigator>
    )
}