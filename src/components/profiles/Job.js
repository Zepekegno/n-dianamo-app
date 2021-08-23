import React from 'react'
import { Input, ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/Ionicons'

export default ({ isExpanded, setExpanded }) => {
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icons name='briefcase-outline' size={30} />
                    <ListItem.Content>
                        <ListItem.Title style={{
                            fontSize: 20,
                            marginHorizontal: 5
                        }} >Your Business</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpanded(!isExpanded)}
        >
            <ListItem bottomDivider={true}>
                <ListItem.Content>
                    <Input placeholder='What your business ?' />
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ListItem.Accordion>
    )
}
