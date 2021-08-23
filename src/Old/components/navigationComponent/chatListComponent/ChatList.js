import { ANTIQUEWHITE_COLOR } from "colors/ConstantColors"
import { tabBarIconSetFontAwsome5 } from "components/MainNavigation"
import React, { useRef, useState } from "react"
import {View} from "react-native"
import { ListUser } from "utils/Listuser"
import SearchBar from "./component/SearchBar"
import UserChatListHeader from "./component/UserChatListHeader"
import UserChatListMsg from "./component/UserChatListMsg"

export const ChatList = ({navigation, route}) => {
  
  return (
    <View style={{ flex: 1 }}>
      <SearchBar navigation={navigation}/>
      <UserChatListMsg data={ListUser}/>
    </View>
  )
}
