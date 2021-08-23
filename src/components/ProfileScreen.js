import React, { Component } from "react";
import { Animated, Easing, PanResponder } from "react-native";

//Icons
import Icons from 'react-native-vector-icons/SimpleLineIcons'

//Utitlity
import { ListUser } from "utils/Listuser";

//Components
import Header from "./HeaderComponent";
import HeaderContent from "./profiles/HeaderContent";
import Profile from "./profiles/Profile";
import ModalMoreInfo from "./profiles/ModalMoreInfo";

const user = ListUser[0]

export default class ProfileScreen extends Component {

    static BottomTabNavigationOptions = (props) => {
        return {
            tabBarIcon: ({ focused, color }) => {
                return <Icons name='user' size={25} color={color} />
            }
        }
    }

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
                    bounciness:15,
                    speed:60
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
        this.subsribe = this.props.navigation.addListener('blur',(e)=>{
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
            bounciness:15,
            speed:60
        }).start()
    }

    render() {
        return (
            <>
                <ModalMoreInfo fadeOut={this.state.position} {...this.props} />
                <Header component={<HeaderContent onPress={this.onShow} />} />
                <Profile {...this.state.panResponder.panHandlers} user={user} {...this.props} />
            </>
        )
    }
}