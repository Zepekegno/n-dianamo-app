import React from "react"
import { View, Text } from "react-native"
import { Avatar, ListItem } from "react-native-elements"
import { IsEmpty } from "utils/IsEmpty"
import { ListUser } from "utils/Listuser"

export const SearchResult = ({ navigation, route }) => {
    const { text } = route.params != undefined ? route.params : ''
    let listUserSearch = []
    if (!IsEmpty(text)) {
        listUserSearch = ListUser.filter((user) => user.firstName.includes(text))
    } else {
        listUserSearch = []
    }
    if (IsEmpty(listUserSearch)) return <Text>Aucun resultat</Text>
    return (
        <View style={{ flex: 1 }}>
            {listUserSearch.map((item, i) => {
                return (
                    <ListItem>
                        <Avatar rounded source={item.image} />
                        <ListItem.Content>
                            <ListItem.Title>
                                {item.firstName}
                            </ListItem.Title>
                            <ListItem.Subtitle>{item.lastName}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron color="black" />
                    </ListItem>
                )
            })}
        </View>
    )
}