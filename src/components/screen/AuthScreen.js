import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "../auth/RegisterScreen";
import LoginScreen from "../auth/LoginScreen";
import ForgotPasswordScreen from "../auth/ForgotPasswordScreen";
const AuthStack = createStackNavigator()

export default (props) => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator screenOptions={{ headerShown: false, }}>
                <AuthStack.Screen name='Login' component={LoginScreen} />
                <AuthStack.Screen name='Register' component={RegisterScreen} />
                <AuthStack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}
export default Auth