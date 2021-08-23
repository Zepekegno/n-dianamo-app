import { DIMGRAY_COLOR, WHITE_COLOR } from 'colors/ConstantColors';
import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IsEmpty } from 'utils/IsEmpty';
export default (props) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.8,
            borderRadius: 8,
            backgroundColor: 'transparant',
            borderColor: WHITE_COLOR,
            width: 250,
            marginHorizontal: 12
        }}>
            <Ionicons name="search-outline" size={25} color={DIMGRAY_COLOR} style={{ marginHorizontal: 8 }} />
            <TextInput
                {...props}
                style={{
                    color: WHITE_COLOR,
                    fontSize: 18,
                    height: 40,
                    width: 225,
                }}
                onChangeText={(text) => {
                    if (!IsEmpty(props.updateWidthChangeText)) {
                        props.updateWidthChangeText.navigation.setParams({ text })
                    }
                    props.onChangeText(text)
                }}
            />
        </View>
    )
}