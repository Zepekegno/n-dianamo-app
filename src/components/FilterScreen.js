import React, { Component, useRef } from 'react'

import PropTypes from 'prop-types'
import { Animated, View } from 'react-native'
import { BottomSheet } from 'react-native-elements'

import Filter from './Filter/Filter'
import FilterConfig from './Filter/FilterConfig'
import { FilterContext } from './Filter/FilterContext'

export default class FilterScreen extends Component {

    static propTypes = {
        data: PropTypes.array,
        hide: PropTypes.func,
        visible: PropTypes.bool
    }

    constructor(props) {
        super(props)

        this.onSetState = this.onSetState.bind(this)

        this.state = {
            filter: false,
            position: new Animated.Value(0),
            profile: false,
            activity: false,
            year: false,
            distance: false,
            familyStatus: false,
            childrenStatus: false
        }
        this.config = {
            values: this.state,
            setValues: this.onSetState
        }
    }


    showFilter = () => {
        this.props.hide(false)
    }

    onSetState = (values) => {
      this.setState(values)
    }


    render = () => {
        return (
            <BottomSheet isVisible={this.props.visible}>
                <View style={{ flex: 1 }}>
                    <FilterContext.Provider value={this.config}>
                        {FilterConfig.map((item, i) => {
                            return (
                                <Filter
                                    key={i} item={item}
                                    touchEnd={this.showFilter}
                                />
                            )
                        })}
                    </FilterContext.Provider>
                </View>
            </BottomSheet>
        )
    }

}