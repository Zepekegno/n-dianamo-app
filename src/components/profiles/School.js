import React from 'react'
import { Input, ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({ isExpanded, setExpanded }) => {
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icons name='school-outline' size={30} />
                    <ListItem.Content>
                        <ListItem.Title style={{
                            fontSize: 20,
                            marginHorizontal: 5
                        }} >Your School</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpanded(!isExpanded)}
        >
            <ListItem bottomDivider={true}>
                <ListItem.Content>
                    <Input placeholder='Where are study ?' />
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ListItem.Accordion>
    )
}