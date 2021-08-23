import 'react-native-gesture-handler'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "App"
import React, { Component } from "react"
import { Animated, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ListUser } from "utils/Listuser"
import { WHITE_COLOR } from "colors/ConstantColors"
import { PanResponder } from "react-native"
import { IsEmpty } from 'utils/IsEmpty'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Carousel from 'componentUtility/Carousel'
import { Card } from 'react-native-elements'


const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH
const SWIPE_DURATION = 100

export class Status extends Component {

    constructor(props) {
        super(props)
    }

    renderItem = (item, index) => {
        return (
            <View key={index}>
                <RenderCardItem data={ListUser[ListUser.length - 1]} />
                <RenderCardItem data={item} />
                <RenderCardItem data={ListUser[0]} />
            </View>

        )
    }

    render = () => {
        return (
            <View style={{ flex: 1 }}>
                <Carousel
                    data={ListUser}
                    renderItem={this.renderItem}
                    emptySlider={NoMoreSlide}
                />
            </View>
        )
    }
}

const NoMoreSlide = () => {
    <Card>
        <Card.Title>No more</Card.Title>
    </Card>
}

const RenderCardItem = ({ data }) => {
    return (
        <Animated.View
            style={[
                {
                    width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 135,
                    padding: 10
                }
            ]}
        >
            <ImageBackground source={data.image} style={{ flex: 1, justifyContent: 'flex-end', resizeMode: "cover", width: null, height: null }}>
                <View style={{ backgroundColor: WHITE_COLOR, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                    <View>
                        <Text style={{ fontSize: 20, color: 'red' }}>{data.lastName}</Text>
                        <Text style={{ fontSize: 20, color: "#222" }}>22min</Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: 'red' }}>{data.firstName}</Text>
                        <Text style={{ fontSize: 20, color: "#222" }}>22min</Text>
                    </View>
                </View>
            </ImageBackground>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    cardItem: {
        width: SCREEN_WIDTH, height: SCREEN_HEIGHT - 135,
        padding: 10
    }
})







        // this.panResponder = PanResponder.create({

        //     onStartShouldSetPanResponder: () => true,

        //     onPanResponderMove: (e, gesture) => {
        //         this.position.setValue({ x: gesture.dx, y: 0 })
        //     },

        //     onPanResponderRelease: (e, gesture) => {
        //         if (gesture.dx > SWIPE_THRESHOLD) {
        //             this.onSwipe('right')
        //         } else if (gesture.dx < - SWIPE_THRESHOLD) {
        //             this.onSwipe('left')
        //         } else {
        //             this.reset()
        //         }
        //     }

        // })

        // onSwipe = (direction) => {
        //     const x = direction == 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH
        //     Animated.timing(this.position, {
        //         toValue: { x, y: 0 },
        //         duration: SWIPE_DURATION,
        //         useNativeDriver: true
        //     }).start(() => this.onSwipeCompleted())
        // }

        // onSwipeCompleted = () => {
        //     this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
        //         this.position.setValue({ x: 0, y: 0 })
        //     })
        // }

        // reset = () => {
        //     Animated.spring(this.position, {
        //         toValue: { x: 0, y: 0 },
        //         useNativeDriver: true,
        //         friction: 4
        //     }).start()
        // }
