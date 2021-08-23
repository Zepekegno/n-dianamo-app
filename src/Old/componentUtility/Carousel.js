import React, { Component } from 'react'
import { Text } from 'react-native'
import { Dimensions, PanResponder, Animated } from 'react-native'

export default class Carousel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: Dimensions.get('window').width,
            translate: new Animated.Value(0),
            page: 0,
        }

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => false,
            onStartShouldSetPanResponderCapture: () => false,
            onMoveShouldSetPanResponder: (e, gesture) => { },
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderTerminationRequest: () => false,
            onPanResponderMove: (e, gesture) => {
                this.state.translate.setValue(gesture.dx)
            },
            onPanResponderRelease: this.endGesture.bind(this),
            onPanResponderTerminate: (e, gesture) => { },
            onShouldBlockNativeResponder: (e, gesture) => true
        })
    }

    endGesture = (e, gesture) => {

        let value = 0
        if (Math.abs(gesture.dx) / this.state.width > 0.2) {
            if (gesture.dx < 0) {
                value = this.state.width * -1
            } else {
                value = this.state.width
            }
        }

        Animated.timing(
            this.state.translate,
            {
                toValue: value,
                duration: 300,
                useNativeDriver: true
            }
        ).start(() => {
            this.state.translate.setValue(0)
            if (value < 0) {
                this.nextPage()
            } else if (value > 0) {
                this.prevPage()
            }
        })
    }

    nextPage = () => {
        let page = this.state.page + 1

        if (page >= this.props.data.length) {
            page = 0
        }
        this.setState({ page })
    }

    prevPage = () => {
        let page = this.state.page - 1

        if (page < 0) {
            page = this.props.data.length - 1
        }
        this.setState({ page })
    }

    getStyle = () => {
        return {
            slider: {
                flexDirection: 'row',
                width: this.props.data.length * this.state.width,
                left: this.state.page * - 1 * this.state.width,
                transform: [{ translateX: this.state.translate }]

            },
        }
    }

    render = () => {
        return (
            <Animated.View {...this.panResponder.panHandlers} style={this.getStyle().slider}>
                {this.props.data.map(this.props.renderItem)}
                {this.props.emptySlider()}
            </Animated.View>
        )
    }
}