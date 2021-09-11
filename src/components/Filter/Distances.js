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
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                }}>
                    <RadioButton.Item label="1-10" value="1" style={{
                        backgroundColor: '#F8F8F8',
                        marginBottom: 5,
                        marginRight: 5,
                    }} position='leading' labelStyle={{
                        fontWeight: '700'
                    }} color={CRIMSON_COLOR} />
                    <RadioButton.Item label="10-20" value="2" style={{
                        backgroundColor: '#F8F8F8',
                        borderRadius: 2,
                        marginBottom: 5,
                    }} position='leading' labelStyle={{
                        fontWeight: '700'
                    }} color={CRIMSON_COLOR} />
                    <RadioButton.Item label="20-30" value="3" style={{
                        backgroundColor: '#F8F8F8',
                        borderRadius: 2,
                        marginBottom: 5,
                        marginHorizontal: 5
                    }} position='leading' labelStyle={{
                        fontWeight: '700'
                    }} color={CRIMSON_COLOR} />
                </View>
            </RadioButton.Group>
        )
    }
}