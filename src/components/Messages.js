import React, { Component, useEffect, useMemo, useRef, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

//import React Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

import Message from "Dump/Message";
import Send from "./discussions/Send";
import useGetMessagePerDay from "hooks/useGetMessagePerDay";
import BoxMessageWithLastWatch from "./discussions/BoxMessageWithLastWatch";
import { useGetMessage } from "hooks/useGetMessage";
import { IsEmpty } from "utils/IsEmpty";
import { FlatList } from "react-native";

const Messages = (props) => {
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

// class Messages extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             user: this.props.route.params.user,
//             session: 1,
//             loading: true,
//             discussions: [],
//             scrollRef: React.createRef(),
//         }
//         this.onSend = this.onSend.bind(this)
//     }


//     componentDidMount = () => {
//         const initial = Message()
//         const { user, session } = this.state
//         const [getMessage] = useGetMessage(initial, session, user.id)
//         const getFilteredMessage = useGetMessagePerDay(getMessage)
//         let discussions = []
//         for (const [key, value] of getFilteredMessage) {
//             discussions.push(<BoxMessageWithLastWatch key={key} session={this.state.session} lastWatch={key} value={value} user={this.state.user} />)
//         }
//         this.setState({ discussions })
//         clearTimout = setTimeout(() => {
//             this.setState({ loading: false })
//         }, 3000);
//         clearTimeout(clearTimeout)
//     }

//     componentDidUpdate = () => {

//     }

//     onSend = (message) => {

//     }

//     render = () => {
// return (
//     <View style={styles.container}>
//         <ScrollView ref={this.state.scrollRef}
//             style={{ flex: 1 }}
//             onContentSizeChange={((w, h) => this.state.scrollRef.current.scrollToEnd())}
//         >
//             {this.state.loading == true && (
//                 <ActivityIndicator
//                     animating={true}
//                     size='large'
//                     color='red'
//                     style={{
//                         flex: 1,
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                         height: 80
//                     }}
//                 />
//             )}
//             {this.state.discussions}
//         </ScrollView>
//         <Send onSend={this.onSend} />
//     </View>
// )
//     }
// }

export default Messages

{/* */ }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
})