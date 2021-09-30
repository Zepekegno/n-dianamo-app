import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Message from "Dump/Message";
import Send from "./discussions/Send";
import BoxMessageWithLastWatch from "./discussions/BoxMessageWithLastWatch";

const MessagesScreen = (props) => {
    const session = 1
    const user = props.route.params.user
    const [all, setAll] = useState(Message())
    const scrollRef = useRef()

    const onSend = (message) => {
        let ori = all.slice()
        const id = ori.length + 1
        const time = new Date(Date.now())
        data = {
            id,
            id_sender: session,
            id_receiver: user.id,
            time,
            message,
            read: false
        }

        ori = [...ori, data]
        setAll(ori)
    }



    return (
        <View style={styles.container}>
            <ScrollView ref={scrollRef}
                style={{ flex: 1 }}
                onContentSizeChange={((w, h) => scrollRef.current.scrollToEnd())}
            >
                <BoxMessageWithLastWatch data={all} session={session} user={user} />
            </ScrollView>
            <Send onSend={onSend} />
        </View>
    )
}

export default MessagesScreen

{/* */ }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#d1d1d1'
    },
})