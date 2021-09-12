import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Animated, PanResponder, ScrollView, StyleSheet, View } from 'react-native'
import { BottomSheet } from 'react-native-elements'

import FilterConfig from './Filter/FilterConfig'
import { Text } from 'react-native'
import BorderBar from './Filter/BorderBar'
import { SCREEN_HEIGHT } from 'App'

export default class FilterScreen extends Component {

    static propTypes = {
        data: PropTypes.array,
        hideFilter: PropTypes.func,
        visible: PropTypes.bool
    }

    constructor(props) {
        super(props)
        const anim = new Animated.ValueXY({ x: 0, y: 0 })
        const pan = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gesture) => {
                if (gesture.dy > 0) anim.setValue({ x: 0, y: gesture.dy })
                if (gesture.dy > 80) {
                    this.onSwipBottom()
                }
            },

            onPanResponderRelease: () => {
                Animated.spring(anim, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true
                }).start()
            }
        })

        this.state = {
            pan,
            anim,
        }
    }

    onSwipBottom = () => {
        const position = this.state.anim
        Animated.spring(position, {
            toValue: { x: 0, y: SCREEN_HEIGHT * 0.25 },
            useNativeDriver: true
        }).start()
        this.props.hideFilter()
        position.setValue({ x: 0, y: 0 })
    }

    render = () => {
        return (
            <BottomSheet isVisible={this.props.visible}>
                <Animated.View {...this.state.pan.panHandlers} style={{
                    position: 'relative',
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    backgroundColor: '#F8F8F8',
                    paddingHorizontal: 10,
                    transform: this.state.anim.getTranslateTransform()
                }}>
                    <BorderBar />
                    <ScrollView style={{
                    }}>
                        {FilterConfig.map((item, i) => {
                            return (
                                <View key={i} style={{ borderBottomWidth: StyleSheet.hairlineWidth, marginVertical: 5 }}>
                                    {item.title != '' && <Text style={{
                                        fontSize: 17
                                    }}>{item.title}</Text>}
                                    {item.item(this.onSetState)}
                                </View>
                            )
                        })}
                    </ScrollView>
                </Animated.View>
            </BottomSheet >
        )
    }

    // {FilterConfig.map((item, i) => {
    //     return (
    //         <Filter
    //             key={i} item={item}
    //             touchEnd={this.showFilter}
    //         />
    //     )
    // })}

}