import React from 'react'
import { ListItem } from 'react-native-elements'
import { Input } from 'react-native-elements/dist/input/Input'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({ isExpanded, setExpanded }) => {
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icons name='email-outline' size={30} />
                    <ListItem.Content>
                        <ListItem.Title style={{
                            fontSize: 20,
                            marginHorizontal: 5
                        }} >Your Email</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpanded(!isExpanded)}
        >
            <ListItem bottomDivider>
                <ListItem.Content>
                    <Input placeholder="Email" textContentType="emailAddress" />
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ListItem.Accordion>
    )
}
