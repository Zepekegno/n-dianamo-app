import { CRIMSON_COLOR } from "colors/ConstantColors";
import React, { Component } from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";

export default class Distances extends Component {
    state = {
        checked: false,
    }
    render = () => {
        return (
            <RadioButton.Group onValueChange={checked => this.setState({ checked })} value={this.state.checked}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                    <RadioButton.Item label="1-10" value="1" style={{
                        backgroundColor: '#F8F8F8',
                    }} position='leading' labelStyle={{
                        fontWeight: '700'
                    }} color={CRIMSON_COLOR} />
                    <RadioButton.Item label="10-20" value="2" style={{
                        backgroundColor: '#F8F8F8',
                    }} position='leading' labelStyle={{
                        fontWeight: '700'
                    }} color={CRIMSON_COLOR} />
                    <RadioButton.Item label="20-30" value="3" style={{
                        backgroundColor: '#F8F8F8',
                    }} position='leading' labelStyle={{
                        fontWeight: '700'
                    }} color={CRIMSON_COLOR} />
                </View>
            </RadioButton.Group>
        )
    }
}