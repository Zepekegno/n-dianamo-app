import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from 'prop-types'

export default class Header extends Component {

    static propTypes = {
        component : PropTypes.element.isRequired
    }

    renderItem = ()=>{
        const {component} = this.props
        return component
    }

    render = () => {
        
        return (
            <View style={headerStyles.container}>
              {this.renderItem()}
            </View>
        )
    }
}

const headerStyles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})