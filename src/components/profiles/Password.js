import React from 'react'
import { Input, ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default  ({ isExpanded, setExpanded }) => {
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icons name='fingerprint' size={30} />
                    <ListItem.Content>
                        <ListItem.Title style={{
                            fontSize: 20,
                            marginHorizontal: 5
                        }} >Password</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpanded(!isExpanded)}
        >
            <ListItem bottomDivider={true}>
                <ListItem.Content>
                    <Input placeholder="Ancien mot de Pass" />
                    <Input placeholder="Nouveau Mot de Pass" secureTextEntry />
                    <Input placeholder="Confirmer Le Mot de Pass" secureTextEntry />
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ListItem.Accordion>
    )
}