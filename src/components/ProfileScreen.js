import React, { Component } from "react";
import { Animated, Easing, PanResponder, Text } from "react-native";

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Utitlity
import { ListUser } from "utils/Listuser";

//Components


const user = ListUser[0]

export default class ProfileScreen extends Component {

    constructor(props) {
        super(props)
        const position = new Animated.Value(0)
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onStartShouldSetPanResponderCapture: () => false,
            onPanResponderGrant: (e, state) => {
                Animated.spring(position, {
                    toValue: 0,
                    useNativeDriver: true,
                    bounciness: 15,
                    speed: 60
                }).start()

            }
        })
        this.state = {
            visible: false,
            panResponder,
            position,
        }
    }

    componentDidMount() {
        this.subsribe = this.props.navigation.addListener('blur', (e) => {
            this.state.position.setValue(0)
        })
    }
    componentWillUnmount() {
        this.subsribe()
    }

    onShow = (state) => {
        Animated.spring(this.state.position, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 15,
            speed: 60
        }).start()
    }

    render() {
        return <Text>Home</Text>
    }
}