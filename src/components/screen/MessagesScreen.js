import { API, APP_HEADER_BACKGROUND_PRIMARY } from "config/config";
import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { ADD_MESSAGE } from "stores/constants";

import BoxMessageWithLastWatch from "./utility/discussions/BoxMessageWithLastWatch";
import Send from "./utility/discussions/Send";

const MessagesScreen = (props) => {

    const { data, logedId, addMessage, logedUser } = props
    const { user } = props.route.params
    const scrollRef = useRef()

    const onSend = (message) => {
        const time = new Date(Date.now())
        const dataMessage = {
            id_sender: logedId,
            id_receiver: user.id,
            time,
            message,
            read: false
        }

        addMessage(dataMessage)
    }


    return (
        <View style={styles.container}>
            <ScrollView ref={scrollRef}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
                style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: 5, paddingTop: 10 }}
                onContentSizeChange={((w, h) => scrollRef.current.scrollToEnd())}
            >
                <BoxMessageWithLastWatch data={data} user={user} currentUser={logedUser} />
            </ScrollView>
            <Send onSend={onSend} />
        </View>
    )
}

const mapStateToProps = state => {
    return {
        data: state.message.data,
        logedId: state.login.logedId,
        logedUser: state.users.data.filter(val => val.id == state.login.logedId)[0]
    }
}

const addMessage = (data) => {

    return dispatch => {
        API.post('message', data)
            .then(res => {
                dispatch({
                    type: ADD_MESSAGE,
                    payload: data
                })
            })
            .catch(e => { })
    }

}

export default connect(mapStateToProps, { addMessage })(MessagesScreen)

{/* */ }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_HEADER_BACKGROUND_PRIMARY,
    },
})