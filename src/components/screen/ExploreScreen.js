/** react and library */
import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity,
    StyleSheet, Animated, PanResponder
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { SCREEN_WIDTH } from '../../config/config'

/** const colors */
import { CRIMSON_COLOR } from 'colors/ConstantColors'

/** redux store */
import { connect } from 'react-redux'
import exploreSelector from 'stores/selectors/exploreSelector'
import {
    getExploreAction, matchUserExploreAction,
    toggleReloadExploreAction
} from 'stores/actions/exploreActions'

/** component */
import TopBarExplore from './utility/explore/TopBarExplore'
import Spiner from 'components/utility/Spiner'
import Explore from './utility/explore/Explore'
import BottomSheetMenu from 'components/utility/BottomSheetMenu'
import FilterContent from './utility/explore/FilterContent'

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
            bottomSheet: false
        }
    }

    /** load data into to store users */
    loadData = async () => {
        this.setState({ loading: true })
        await this.props.toggleReloadExploreAction(this.handlerRequestError)
        this.setState({ loading: false })

    }

    /** handle request error */
    handlerRequestError = (bool) => {
        if (this.state.loading == true) this.setState({ loading: false })
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


    /** compent show when empty card user */
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

    /** reload card user from redux state */
    onReload = () => {
        this.loadData(this.handlerRequestError)
            .catch(e => console.log(this.setState({ loading: false })))
    }

    /** get like type to match current user */
    onLike = (type) => {
        if (this.state.current == this.props.users.length) return
        if (this.props.users[this.state.current] == null) return
        const user = this.props.users[this.state.current]

        const data = {
            id_matcher: this.props.logedId,
            id_matched: user.id,
            type,
            is_match: false
        }
        this.props.matchUserExploreAction(data)
        this.swipe('Right')

    }

    showBottomSheet = () => {
        this.setState({ bottomSheet: !this.state.bottomSheet })
    }

    gotoProfile = async () => {
        this.props.navigation.navigate('Profile', { id: this.props.logedId })
    }

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: CRIMSON_COLOR,
                position: 'relative'
            }}>
                <TopBarExplore onPress={this.showBottomSheet} isVisible={this.state.bottomSheet} />
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                        <TouchableOpacity style={styles.button} onPress={e => this.onLike(0)}>
                            <Icons name="heart-sharp" size={25} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={e => this.onLike(1)}>
                            <Icons name="star" size={25} color="green" />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <BottomSheetMenu
                    contentContainerStyle={{
                        padding: 0,
                    }}
                    isVisible={this.state.bottomSheet}
                    onLineSlide={this.showBottomSheet}>
                    <View>
                        <FilterContent />
                    </View>
                </BottomSheetMenu> */}
            </View>

        )
    }
}

export default connect(exploreSelector, { matchUserExploreAction, toggleReloadExploreAction, getExploreAction })(ExploreScreen)

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 10,
        width: '90%',
        marginTop: 10
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
        elevation: 2
    }
})