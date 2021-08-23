import { WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Card, ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({ isExpanded, setExpanded, user }) => {
    return (
        <ListItem.Accordion
            content={
                <>
                    <Icons name='archive-outline' size={30} />
                    <ListItem.Content>
                        <ListItem.Title style={{
                            fontSize: 20,
                            marginHorizontal: 5
                        }} >Galerie</ListItem.Title>
                    </ListItem.Content>
                </>
            }
            isExpanded={isExpanded}
            onPress={() => setExpanded(!isExpanded)}
        >
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ScrollView horizontal>
                        <View style={{
                            width: 250,
                            height: 400
                        }}>
                            <Card>
                                <Card.Image source={user.image} style={{
                                    width: null,
                                    height: 280,
                                    resizeMode: 'cover'
                                }} />
                                <Card.Title>2/5/2021</Card.Title>
                            </Card>
                        </View>
                        <View style={{
                            width: 250,
                            height: 400
                        }}>
                            <Card>
                                <Card.Image source={user.image} style={{
                                    width: null,
                                    height: 280,
                                    resizeMode: 'cover'
                                }} />
                                <Card.Title>2/5/2021</Card.Title>
                            </Card>
                        </View>
                        <View style={{
                            flex: 1,
                            width: 250,
                            height: 400,
                            paddingTop: 80
                        }}>
                            <Card>
                                <Button
                                    title="Voir l'archive"
                                    iconRight
                                    icon={<Icons name="plus" size={30} color={WHITE_COLOR} />} />
                            </Card>
                        </View>
                    </ScrollView>
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </ListItem.Accordion>
    )
}