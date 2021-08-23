/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler'
 import 'react-native-reanimated'
 import React, { useState } from "react";
 import {Dimensions,TouchableOpacity, View } from "react-native";
 import { createStackNavigator, CommonActions } from "@react-navigation/stack";
 import { NavigationContainer } from "@react-navigation/native";
 
 /* Icon import */
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 
 //Mes import navigation component
 import MainNavigator from "components/MainNavigation";
 import { FilterComponent } from 'components/navigationComponent/FilterComponent';
 import { Profile } from 'components/navigationComponent/Profile';
 
 // Import Colors
 import { CRIMSON_COLOR, DIMGRAY_COLOR, WHITE_COLOR } from 'colors/ConstantColors';
 
 import SearchBarComponent from 'componentUtility/SearchBarComponent';
 import { SearchResult } from 'components/navigationComponent/SearchResult';
 
 
 export const SCREEN_WIDTH = Dimensions.get("window").width
 export const SCREEN_HEIGHT = Dimensions.get('window').height
 
 const Stack = createStackNavigator()
 
 const App = () => {
   const [searchText, setSearchText] = useState('')
   const [visible, setVisible] = useState(false)
 
   const onPressHandler = () => {
     setVisible(!visible)
   }
 
   const onSearchTextChange = (text) => {
     setSearchText(text)
   }
 
   //  headerStyle: { backgroundColor: ANTIQUEWHITE_COLOR }
   return (
     <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: CRIMSON_COLOR } }}>
 
         {/* Main Screen Component */}
         <Stack.Screen name='MainScreen' component={MainNavigator} options={
           ({ navigation, route }) => (
             {
               title: "FindMe",
               headerTitle: 'FindMe',
               headerTintColor: WHITE_COLOR,
               headerRight: () => {
                 return (
                   <View style={{ flexDirection: "row", alignItems: 'center', marginHorizontal: 12 }}>
                     <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={{ marginHorizontal: 20 }}>
                       <FontAwesome name="user-circle-o" size={25} color={WHITE_COLOR} />
                     </TouchableOpacity>
                     <TouchableOpacity style={{}} onPress={() => setVisible(true)}>
                       <MaterialCommunityIcons name="filter" size={25} color={WHITE_COLOR} />
                     </TouchableOpacity>
                   </View>
                 )
               }
             }
           )
         } />
 
         {/* Profile Compnent */}
         <Stack.Screen name="Profile" component={Profile} options={{
           headerTintColor: WHITE_COLOR,
           headerRight: () => {
             return (
               <TouchableOpacity style={{ marginHorizontal: 8 }}>
                 <MaterialCommunityIcons name="content-save" size={25} color={WHITE_COLOR} />
               </TouchableOpacity>
             )
           }
         }} />
 
         {/* Search Compnent */}
         <Stack.Screen name="SearchMatched" component={SearchResult} options={({ navigation, route }) => (
           {
             headerTintColor:WHITE_COLOR, 
             headerTitle: () => {
               const routes = {
                 navigation,
                 route
               }
               return (
                 <SearchBarComponent
                   autoCompleteType="name"
                   placeholder="Rechercher qui"
                   placeholderTextColor={WHITE_COLOR}
                   autoFocus
                   onChangeText={onSearchTextChange}
                   updateWidthChangeText={routes} />
               )
             },
             headerTitleAlign: 'center'
           }
         )} />
       </Stack.Navigator>
 
       {/* FIlter Component */}
       <FilterComponent visible={visible} pressHandler={onPressHandler} />
 
     </NavigationContainer>
   )
 }
 
 export default App;