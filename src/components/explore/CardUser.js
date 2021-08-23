import React, { Component } from 'react'

import Proptypes from 'prop-types'
import { Animated, PanResponder, StyleSheet, View } from 'react-native'
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
                position.setValue({ x: state.dx, y: 0 })
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
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: ['-45deg', '0deg', '45deg'],
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
            outputRange: [1, 0.5, 1],
            extrapolate: 'clamp'
        })

        //Value get opacity for top card liked button after interpolate the position x of animated
        this.likedBtnOpacityPrimary = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 1, 0.5],
            extrapolate: 'clamp'
        })

        //Value get opacity for back card liked button after interpolate the position x of animated
        this.likedBtnOpacitySecondary = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0, 1],
            extrapolate: 'clamp'
        })

        this.state = {
            current: 0,
            position,
            pan,
            likedPosioned:0
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

    //Global style for the animated container
    styles = (animated) => {
        const { container } = styles
        const transform = this.transformAndRotate()
        if (!animated) return [
            container,
            {
                opacity: this.opacityNext,
                transform: [{ scale: this.scaleNext }]
            }
        ]
        return [
            container,
            transform
        ]

    }
    // Called to render an component for each item in the data
    renderCard = () => {

        const { current } = this.state

        const animatedStyle = this.styles(true)
        const notAnimatedStyle = this.styles(false)

        if (current == this.props.data.length) {
            return this.props.emptyCard()
        }

        return this.props.data.map((item, index) => {
            if (index < current) return null

            if (index == current) {
                return (
                    <Animated.View
                        style={animatedStyle}
                        key={index}
                        {...this.state.pan.panHandlers}>
                        {this.props.renderCard(item, index, this.likedBtnOpacityPrimary)}
                    </Animated.View>
                )
            }
            return (
                <Animated.View style={notAnimatedStyle}
                    key={index}>
                    {this.props.renderCard(item, index, this.likedBtnOpacitySecondary)}
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