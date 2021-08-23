import React from 'react'
import { Input, ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/Ionicons'

export default ({ isExpanded, setExpanded }) => {
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icons name='call-outline' size={30} />
                    <ListItem.Content>
                        <ListItem.Title style={{
                            fontSize: 20,
                            marginHorizontal: 5
                        }} >Phone Number</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpanded(!isExpanded)}
        >
            <ListItem bottomDivider>
                <ListItem.Content>
                    <Input placeholder='Your Phone Number' textContentType="telephoneNumber" />
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ListItem.Accordion>
    )
}
