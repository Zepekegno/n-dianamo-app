import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-paper";
import { CRIMSON_COLOR } from "colors/ConstantColors";

export default YearInterval = () => {
    const [year, setYear] = useState(false)
    return (
        <RadioButton.Group onValueChange={(year) => setYear(year)} value={year}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around'
            }}>
                <RadioButton.Item label="18-25" position="leading" value="0" style={{
                    backgroundColor: '#F8F8F8'
                }} labelStyle={{
                    fontWeight: '700'
                }} color={CRIMSON_COLOR} />
                <RadioButton.Item label="25-45" position="leading" value="1" style={{
                    backgroundColor: '#F8F8F8'
                }} labelStyle={{
                    fontWeight: '700'
                }} color={CRIMSON_COLOR} />
                <RadioButton.Item label="45+" position="leading" value="2" style={{
                    backgroundColor: '#F8F8F8'
                }} labelStyle={{
                    fontWeight: '700'
                }} color={CRIMSON_COLOR} />
            </View>
        </RadioButton.Group>
    )
}