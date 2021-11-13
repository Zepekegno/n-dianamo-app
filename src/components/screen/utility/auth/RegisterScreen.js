import { createStackNavigator } from '@react-navigation/stack'
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
            title: "Inscription",
            headerStyle: {
                backgroundColor: 'tomato',
            },
            headerTintColor: '#fffafa'
        }}>
            <RegisterStack.Screen name='Name' component={NameForm} />
            <RegisterStack.Screen name='Year' component={YearForm} />
            <RegisterStack.Screen name='Gender' component={GenderForm} />
            <RegisterStack.Screen name='Email' component={EmailForm} />
            <RegisterStack.Screen name='Password' component={PasswordForm} />
        </RegisterStack.Navigator>
    )
}
