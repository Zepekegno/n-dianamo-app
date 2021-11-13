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
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'transparent',
            paddingHorizontal: 10,
        }}>
            <TouchableOpacity style={{ zIndex: 1000 }}>
                <Ionicons name="md-happy" size={25} color='#FFF' />
            </TouchableOpacity>
            <TextInput
                underlineColorAndroid='#fff'
                placeholder='tap quelque chose'
                multiline={true}
                scrollEnabled={true}
                style={{
                    color: '#FFF',
                    fontSize: 17,
                    flex: 1,
                    marginHorizontal: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    maxHeight: 100,
                }} placeholderTextColor='#FFF'
                onChangeText={setText}
                onSubmitEditing={sendMessage}
                value={text}
            />

            <TouchableOpacity onPress={sendMessage} style={{ zIndex: 1000 }}>
                <Ionicons name="send" size={25} color='#FFF' />
            </TouchableOpacity>
        </View>
    )
}