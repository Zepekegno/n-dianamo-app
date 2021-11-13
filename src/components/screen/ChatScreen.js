import React, { Component } from "react";
import { View } from "react-native";
import { CRIMSON_COLOR, ROYALBLUE_COLOR } from "colors/ConstantColors";
import TopBarChat from "./utility/chat/TopBarChat";
import HeaderList from "./utility/chat/HeaderList";
import MessageList from "./utility/chat/MessageList";


export default class ChatScreen extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: CRIMSON_COLOR
            }}>
                <TopBarChat />
                <HeaderList />
                <MessageList />
            </View>
        )
    }
}