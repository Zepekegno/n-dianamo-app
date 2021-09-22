import React, { useState } from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default ({ onSend }) => {
    const [text, setText] = useState('')
    const sendMessage = () => {
        onSend(text)
        setText('')
    }

    return (
        <View style={{
            elvation: 3,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#3cb371',
            borderRadius: 15,
            paddingHorizontal: 10,
        }}>
            <TouchableOpacity style={{}}>
                <Ionicons name="md-happy" size={25} color='#FFF' />
            </TouchableOpacity>
            <TextInput placeholder='tap quelque chose' multiline={true} scrollEnabled
                style={{
                    color: '#FFF',
                    fontSize: 17,
                    flex: 1,
                    margin: 0,
                    padding: 10,
                    maxHeight: 100
                }} placeholderTextColor='#FFF'
                onChangeText={setText}
                value={text}
            />

            <TouchableOpacity onPress={sendMessage}>
                <Ionicons name="md-paper-plane" size={25} color='#FFF' />
            </TouchableOpacity>
        </View>
    )
}