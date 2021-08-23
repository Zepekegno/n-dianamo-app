import React from 'react'
import { View } from 'react-native'
import { Input, ListItem } from 'react-native-elements'

export default () => {
    return (
        <View>
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={{
                        fontSize: 20
                    }}>About You</ListItem.Title>
                    <Input placeholder="Resume About you" multiline maxLength={250} />
                </ListItem.Content>
            </ListItem>
        </View>
    )
}