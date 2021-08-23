import React from "react";
import { Alert, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default ({navigation}) => {
    return (
        <View style={{ padding: 10 }}>
            <TextInput style={{
                borderWidth: 2,
                borderRadius: 15,
                borderColor: 'green',
                fontSize: 20,
                paddingHorizontal: 20
            }} editable onPressIn={() => navigation.navigate('SearchMatched')} placeholder="Search" inlineImageLeft='help' />
        </View>
    )
}