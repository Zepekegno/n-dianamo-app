/** React and library */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';

/** custom  navigation ref */
import { navigationRef } from 'hooks/useGetNavigation';

/** Main navigation bottom-tabs */
import MainNavigator from './MainNavigator';

/** const from config */
import { APP_COLOR__PRIMARY, APP_HEADER_BACKGROUND_PRIMARY } from 'config/config';

/** compnent utility */
import UserNameAndAvatar from 'components/utility/UserNameAndAvatar';
import MessageIconsRight from 'components/utility/MessageIconsRight';

/** Screens */
import MessagesScreen from '../screen/MessagesScreen';


const Stack = createStackNavigator()

export default (props) => {

    return (
        <>
            <StatusBar backgroundColor={APP_HEADER_BACKGROUND_PRIMARY} />
            <NavigationContainer ref={navigationRef} >

                <Stack.Navigator screenOptions={(navProps) => ({
                    headerShown: navProps.route.name != 'Main',
                    headerTitle: ({ tintColor }) => {
                        if (navProps.route.name == 'Message') {
                            return (<UserNameAndAvatar color={tintColor} {...navProps} />)
                        }
                    },
                    headerRight: ({ tintColor }) => {
                        if (navProps.route.name == 'Message') {
                            return (
                                <MessageIconsRight color={tintColor} {...navProps} />
                            )
                        }
                    },
                    headerStyle: {
                        backgroundColor: APP_HEADER_BACKGROUND_PRIMARY,
                    },
                    headerTintColor: APP_COLOR__PRIMARY
                })}>

                    <Stack.Screen name="Main" component={MainNavigator} />
                    <Stack.Screen name="Message" component={MessagesScreen} />
                </Stack.Navigator>

            </NavigationContainer>
        </>
    )
}