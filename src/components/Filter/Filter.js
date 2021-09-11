import React, { Component } from "react";
import { Animated, PanResponder } from "react-native";
import { ListItem } from "react-native-elements";


export default class Filter extends Component {

    constructor(props) {
        super(props)
        const anim = new Animated.Value(0)
        const pan = PanResponder.create({

        })
    }

    render = () => {
        const { item, touchEnd } = this.props
        return (
            <Animated.View style={{ borderRadius: 30, marginHorizontal: 5 }}>
                <ListItem bottomDivider={item.bottomDivider}>
                    <ListItem.Content>
                        {item.title != undefined &&
                            <ListItem.Title>{item.title}</ListItem.Title>}
                        {item.item({ touchEnd })}
                    </ListItem.Content>
                </ListItem>
            </Animated.View>
        )
    }
}