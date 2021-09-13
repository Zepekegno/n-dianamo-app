import React, { Component } from 'react'

import Proptypes from 'prop-types'
import { Animated, PanResponder, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { SCREEN_WIDTH } from 'App'

const SWIPE_THRESHOLD = 130

export default class CardUser extends Component {

    static propTypes = {
        data: Proptypes.array.isRequired,
        renderCard: Proptypes.func.isRequired,
        emptyCard: Proptypes.func,
    }

    constructor(props) {
        super(props)

        const position = new Animated.ValueXY()

        const pan = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, state) => {
                position.setValue({ x: state.dx, y: state.dy })
            },
            onPanResponderRelease: (e, state) => {
                if (state.dx > SWIPE_THRESHOLD) {
                    this.swipe('Right')
                } else if (state.dx < - SWIPE_THRESHOLD) {
                    this.swipe('Left')
                } else {
                    this.resetAnimation()
                }
            }
        })

        //Value get for rotation after interpolate the position x of animated
        this.rotation = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
            outputRange: ['-120deg', '0deg', '120deg'],
            extrapolate: 'clamp'
        })

        //Value get opacity for next card after interpolate the position x of animated
        this.opacityNext = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.5, 1],
            extrapolate: 'clamp'
        })

        //Value get scale for next card after interpolate the position x of animated
        this.scaleNext = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.8, 1],
            extrapolate: 'clamp'
        })


        this.state = {
            current: 0,
            position,
            pan,
        }
    }

    // Reset the animated value to zero
    resetAnimation = () => {
        const { position } = this.state
        Animated.spring(position, {
            useNativeDriver: true,
            toValue: { x: 0, y: 0 },
            friction: 4
        }).start()
    }

    // Swipe to rght or left the card
    swipe = (direction) => {
        const { position } = this.state
        const x = direction === 'Right' ? SCREEN_WIDTH + 100 : -SCREEN_WIDTH - 100
        const y = 0

        Animated.spring(position, {
            toValue: { x, y },
            useNativeDriver: true
        }).start(this.completedAnimation(position))
    }

    //Called when the Animated ended
    completedAnimation = (position) => {
        this.setState({ current: this.state.current + 1 }, () => {
            position.setValue({ x: 0, y: 0 })
        })
    }

    //Applique une rotation et une translation à la vue
    transformAndRotate = () => {
        return {
            transform: [{
                rotate: this.rotation
            }, ...this.state.position.getTranslateTransform()]
        }
    }

    // Called to render an component for each item in the data
    renderCard = () => {

        const { current } = this.state

        if (current == this.props.data.length) {
            return this.props.emptyCard()
        }

        return this.props.data.map((item, index) => {
            if (index < current) return null

            if (index == current) {
                return (
                    <Animated.View
                        style={
                            [
                                {
                                    width: SCREEN_WIDTH - 20,
                                    backgroundColor: "#FFF",
                                    shadowColor: "#000",
                                    shadowOffset: { width: 0, height: 2 },
                                    padding: 10,
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    alignSelf: 'center',
                                    marginVertical: 5,
                                    borderRadius: 10,
                                },
                                this.transformAndRotate()
                            ]
                        }
                        key={index}
                        {...this.state.pan.panHandlers}>
                        {this.props.renderCard(item, index)}
                    </Animated.View>
                )
            }
            return (
                <Animated.View style={
                    [
                        {
                            width: SCREEN_WIDTH - 20,
                            backgroundColor: "#FFF",
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 2 },
                            padding: 10,
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            alignSelf: 'center',
                            marginVertical: 5,
                            borderRadius: 10,
                            opacity: this.opacityNext,
                            transform: [{ scale: this.scaleNext }]
                        }
                    ]
                }
                    key={index}>
                    {this.props.renderCard(item, index, this.state.position)}
                </Animated.View>
            )
        }).reverse()
    }

    render = () => {
        return this.renderCard()
    }

}


//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        padding: 10,
        width: 350,
        marginVertical: 10,
        marginHorizontal: 25,
        borderRadius: 5,
        position: 'absolute',
        top: 0,
        height: '95%'
    },
})