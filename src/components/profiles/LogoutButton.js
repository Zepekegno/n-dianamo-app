import { CRIMSON_COLOR, WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { View } from 'react-native'
import { Button } from 'react-native-elements'

import Icons from 'react-native-vector-icons/MaterialIcons'

export default () => {
    return (
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 10
        }}>
            <Button title='LogOut' titleStyle={{
                fontSize: 18,
                textTransform: 'uppercase',
                marginHorizontal: 8
            }} buttonStyle={{
                backgroundColor: CRIMSON_COLOR,
                borderRadius: 15
            }} iconRight icon={<Icons name="logout" size={25} color={WHITE_COLOR} />} />
        </View>
    )
}