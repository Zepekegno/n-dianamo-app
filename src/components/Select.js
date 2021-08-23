import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'

export default class Select extends Component {

    static proptypes = {
        selectData: PropTypes.array.isRequired,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ])
    }

    state = {
        open: false
    }

    renderTitle = () => {
        const { title } = this.props
        return typeof (title) === 'function' ? title() : title
    }

    openModal = () => {
        this.setState({ open: true })
    }

    modal = () => {
        return (
            <View style={{
                position: 'absolute',
                marginTop: 10,
                right: 0,
                zIndex: 100,
                backgroundColor: '#fff',
                shadowColor: '#222',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.5,
                elevation: 10,
                paddingHorizontal: 10,
                paddingVertical: 10,
            }}>
                <ScrollView>
                    {
                        this.props.selectData.map((item, index) => {
                            return (
                                <TouchableWithoutFeedback key={index}>
                                    <Text style={{
                                        marginBottom: 10
                                    }}>{item}</Text>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }

    getStyle = () => {
        const { style } = this.props
        const container = {
            position: 'relative',
            backgroundColor: '#F8F8F8',
            height:40,
            alignItems:'center',
            justifyContent:'center',
            paddingHorizontal:10,
            shadowColor:'#222',
            shadowOffset:{with:0, height:5},
            shadowOpacity:0.5,
            marginVertical:5
     
        }
        return [
            container,
            style
        ]
    }


    render = () => {
        const style = this.getStyle()
        return (
            <View style={style}>
                <TouchableWithoutFeedback onPress={this.openModal}>
                    <View>
                        {this.renderTitle()}
                    </View>
                </TouchableWithoutFeedback>
                {this.state.open && this.modal()}
            </View>
        )
    }

}

const s = StyleSheet.create({
    // cont:{
    //     borl
    // }
})