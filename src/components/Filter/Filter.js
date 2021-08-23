import React, { Component, createContext } from "react";
import { ListItem } from "react-native-elements";


export default class Filter extends Component {

    render = () => {
        const {item,touchEnd} = this.props
        return (
            <ListItem bottomDivider={item.bottomDivider}>
                <ListItem.Content>
                    {item.title != undefined &&
                        <ListItem.Title>{item.title}</ListItem.Title>}
                    {item.item({touchEnd})}
                </ListItem.Content>
            </ListItem>
        )
    }
}