import React from 'react'
import { TextInput, View } from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'

export default (props) => {
    <View style={{
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 25,
        margin: MARGIN / 2
    }}>
        <Icons name='search-outline' size={20} />
        <TextInput style={{
            paddingHorizontal: 20,
            fontSize: 20,
            textTransform: 'capitalize'
        }}
            placeholder='Recherche'
        />
    </View>
}