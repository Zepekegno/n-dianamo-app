/* React import */
import "react-native-gesture-handler"
import "react-native-reanimated"
import * as React from 'react'
import { Text, } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import component
import { Home } from "./navigationComponent/homeComponent/Home"
import { ChatList } from "./navigationComponent/chatListComponent/ChatList"
import { MatchList } from "./navigationComponent/matchListComponent/MatchList"

// import Styles
import { bottomTabStyle } from "style/bottomTabStyle";

//import const
import { ANTIQUEWHITE_COLOR, CRIMSON_COLOR, DIMGRAY_COLOR, LIGHTSEAGREEN_COLOR, ORANGE_COLOR, RED_COLOR, WHITE_COLOR } from "colors/ConstantColors";
import { Status } from "./navigationComponent/Status";


// initialisation de BottomTabNavigator
const TabTopNivigator = createBottomTabNavigator()

//La Navigation Principale
const MainNavigator = () => {

  return (
    <TabTopNivigator.Navigator initialRouteName="Status" tabBarOptions={{
      labelPosition:'beside-icon',
      activeTintColor: WHITE_COLOR,
      inactiveTintColor: '#222',
      labelStyle: {
        fontSize: 18,
        fontWeight: '700',
      },
      style: {
        height:60,
        alignItems:'center',
        backgroundColor: CRIMSON_COLOR,
      }
    }}
    >
      <TabTopNivigator.Screen name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return <Ionicons name="home-outline" size={25} color={WHITE_COLOR} />
          }
        }}
      />

      <TabTopNivigator.Screen name="Chat"
        component={ChatList}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="chatbox-outline" size={25} color={WHITE_COLOR} />
          },
        }}
      />

      <TabTopNivigator.Screen name="Match" component={MatchList}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="heart-outline" size={25} color={WHITE_COLOR} />
          },
        }}
      />

      <TabTopNivigator.Screen name="Status" component={Status}
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="open-in-new" size={25} color={WHITE_COLOR} />
          },
        }}
      />
    </TabTopNivigator.Navigator>
  )
}


const tabBarOptionsStyle = {
  showIcon: true
}

export default MainNavigator