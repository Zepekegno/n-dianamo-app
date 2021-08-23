import React from "react"
import {FlatList, StyleSheet, Text, View } from "react-native"
import { ListUser } from "utils/Listuser"
import { SCREEN_WIDTH } from "App"
import MatchedList from "./component/MatchedList"
import { ANTIQUEWHITE_COLOR } from "colors/ConstantColors"

export const MatchList = () => {
  return (
    <View style={{ flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        renderItem={MatchedList}
        keyExtractor={(item) => item.id}
        data={ListUser}
      />
    </View>
  )
}