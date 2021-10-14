import React, { Component } from 'react'
import Proptypes, { array } from 'prop-types'
import { Animated, PanResponder, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { API, SCREEN_WIDTH } from 'App'
import { connect } from 'react-redux'
import stores from 'stores'
import iniUsers from 'stores/actions/iniUsers'
import { INI_STATE_USERS } from 'stores/reducers/usersReducers'

const SWIPE_THRESHOLD = 130

class CardUser extends Component {

    static propTypes = {
        data: Proptypes.array.isRequired,
        renderCard: Proptypes.func.isRequired,
        emptyCard: Proptypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        const position = new Animated.Value(0)

        const pan = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, state) => {
                position.setValue(state.dx)
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
        this.rotation = position.interpolate({
            inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
            outputRange: ['-45deg', '0deg', '45deg'],
            extrapolate: 'clamp'
        })

        //Value get opacity for next card after interpolate the position x of animated
        this.opacityNext = position.interpolate({
            inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
            outputRange: [1, 0.5, 1],
            extrapolate: 'clamp'
        })

        //Value get scale for next card after interpolate the position x of animated
        this.scaleNext = position.interpolate({
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
            toValue: 0,
            friction: 4
        }).start()
    }

    // Swipe to rght or left the card
    swipe = (direction) => {
        const { position } = this.state
        const x = direction === 'Right' ? SCREEN_WIDTH + 100 : -SCREEN_WIDTH - 100

        Animated.spring(position, {
            toValue: x,
            useNativeDriver: true
        }).start(this.completedAnimation(position))
    }

    //Called when the Animated ended
    completedAnimation = (position) => {
        this.setState({ current: this.state.current + 1 }, () => {
            position.setValue(0)
        })
    }

    //Applique une rotation et une translation à la vue
    translateAndRotate = () => {
        return {
            transform: [{
                rotate: this.rotation
            }, { translateX: this.state.position }]
        }
    }

    // Called to render an component for each item in the data
    renderCard = () => {
        const { current } = this.state
        const data = this.props.data
        if (current == data.length) {
            return this.props.emptyCard()
        }

        return data.map((item, index) => {
            if (index < current) return null

            if (index == current) {
                this.props.getCurrentId(item.id)
                return (
                    <Animated.View
                        style={
                            [
                                styles.container,
                                this.translateAndRotate(),
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
                        styles.container,
                        {
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
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 5,
        position: 'absolute',
        top: 0,
        bottom: 0,
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 10,
    }
})

// const mapStateToProps = (state) => {
//     return {
//         users: state.users
//     }
// }

// export default connect(mapStateToProps)(CardUser)