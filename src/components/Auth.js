import React, { useContext, } from "react";
import { StyleSheet } from "react-native";
import AuthContext from "contexts/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterScreen from "./auth/RegisterScreen";
const AuthStack = createStackNavigator()

const Auth = (props) => {

    const context = useContext(AuthContext)

    return (
        <NavigationContainer>
            <AuthStack.Navigator>
                <AuthStack.Screen name='Register' component={RegisterScreen} options={{ title: 'Registration' }} />
            </AuthStack.Navigator>
        </NavigationContainer>
    )
}
export default Auth


const STYLE = StyleSheet.create({
    container: {
        position: 'relative'
    },
    signContainer: {
        position: 'absolute',
        width: '100%',
        borderWidth: 1,
        top: 100
    }
})