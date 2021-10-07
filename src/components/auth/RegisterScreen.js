import { createStackNavigator } from '@react-navigation/stack'
import { SCREEN_WIDTH } from 'App'
import AuthContext from 'contexts/AuthContext'
import React from 'react'
import EmailForm from './register/EmailForm'
import GenderForm from './register/GenderForm'
import NameForm from './register/NameForm'
import PasswordForm from './register/PasswordForm'
import YearForm from './register/YearForm'

const RegisterStack = createStackNavigator()

export default (props) => {
    return (
        <RegisterStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <RegisterStack.Screen name='Name' component={NameForm} />
            <RegisterStack.Screen name='Year' component={YearForm} />
            <RegisterStack.Screen name='Gender' component={GenderForm} />
            <RegisterStack.Screen name='Email' component={EmailForm} />
            <RegisterStack.Screen name='Password' component={PasswordForm} />
        </RegisterStack.Navigator>
    )
}
