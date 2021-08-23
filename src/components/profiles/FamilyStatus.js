import React from 'react'
import { View } from 'react-native'
import { CheckBox, ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/MaterialIcons'

export default ({ isExpanded, setExpanded }) => {
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icons name='family-restroom' size={30} />
                    <ListItem.Content>
                        <ListItem.Title style={{
                            fontSize: 20,
                            marginHorizontal: 5
                        }} >Family Status</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpanded(!isExpanded)}
        >
            <ListItem bottomDivider={true}>
                <ListItem.Content>
                    <ListItem.Title>Staus</ListItem.Title>
                    <View style={{flexDirection:'row'}}>
                        <CheckBox title="Maried" />
                        <CheckBox title="Single" />
                        <CheckBox title="Divorced" />
                    </View>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
            <ListItem bottomDivider={true}>
                <ListItem.Content>
                    <ListItem.Title>Children</ListItem.Title>
                    <View style={{flexDirection:'row'}}>
                        <CheckBox title="Yes" />
                        <CheckBox title="No" />
                    </View>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ListItem.Accordion>
    )
}