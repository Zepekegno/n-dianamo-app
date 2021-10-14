import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Animated, PanResponder } from 'react-native'
import Explore from './explore/Explore'
import Icons from 'react-native-vector-icons/Ionicons'
import { API, SCREEN_WIDTH } from 'App'
import { connect } from 'react-redux'
import exploreSelector from 'stores/selectors/exploreSelector'
import { INI_STATE_USERS } from 'stores/reducers/usersReducers'
import { toGetFromApi } from 'stores/actions/getAllAction'
import Spiner from 'componentUtility/Spiner'
const SWIPE_THRESHOLD = 130

class ExploreScreen extends Component {

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
            loading: false,
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
    cardRender = () => {
        const { current } = this.state
        const data = this.props.users

        if (current == data.length) {
            return this.emptyCard()
        }

        return data.map((item, index) => {
            if (index < current) return null

            if (index == current) {
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
                        {this.renderCard(item, index)}
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
                    {this.renderCard(item, index, this.state.position)}
                </Animated.View>
            )
        }).reverse()
    }


    emptyCard = () => {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                flexDirection: 'row',
            }}>
                <Text style={{
                    fontSize: 20
                }}>Oops il n'y a plus de matches</Text>
            </View>
        )
    }

    renderCard = (item, index, animatedValue) => {
        return (
            <Explore
                key={index}
                item={item}
                animated={animatedValue} />
        )
    }

    onReload = async () => {
        this.setState({ loading: true })
        await this.props.toggleReload(this.props.logedId)
        this.setState({ loading: false })
    }

    onLike = (type) => { }
    onFilter = () => { }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.state.loading && (<View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Spiner color="red" /></View>)}
                    {!this.state.loading && this.cardRender()}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={this.onReload}>
                        <Icons name="reload-circle" size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={e => this.onLike(1)}>
                        <Icons name="heart-sharp" size={25} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={e => this.onLike(2)}>
                        <Icons name="star" size={25} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={e => this.onFilter(2)}>
                        <Icons name="funnel" size={25} color="rgba(0,0,0,0.5)" />
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const toggleReload = (id) => {
    return async (dispatch, getState) => {
        await toGetFromApi(`/users?id_ne=${id}&_embed=image`)
            .then(res => {
                if (getState().users.length == res.length) {
                    return
                }
                dispatch({ type: INI_STATE_USERS, payload: res })
            })
    }
}

export default connect(exploreSelector, { toggleReload })(ExploreScreen)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 10,
        elevation: 3,
        width: '90%'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        height: 50,
        width: 50,
        backgroundColor: '#fff',
        shadowColor: "#222",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.75,
        shadowRadius: 8.45,
        elevation: 10,
    }
})