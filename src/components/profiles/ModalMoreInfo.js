import React from 'react'
import { Text, TouchableOpacity, View, Animated } from 'react-native'
import { ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default (props) => {
    const { navigation } = props
    const modalList = [
        {
            title: 'Autre Information Personel',
            icon: 'information-outline',
            onPress: () => navigation.navigate('ModalComponent', { view: 'personal' })
        },
        {
            title: "Partager l'application",
            icon: 'share-outline',
            onPress: () => navigation.navigate('ModalComponent', { view: 'share' }),
        },
        {
            title: "Condition d'utiilisation",
            icon: 'crosshairs-question',
            onPress: () => navigation.navigate('ModalComponent', { view: 'policy' }),
        },
        {
            title: "Suprimer Mon Compte",
            icon: 'delete-outline',
            onPress: () => navigation.navigate('ModalComponent', { view: 'delete' }),
        },
    ]
    return <Animated.View style={{
        position: 'absolute',
        right: 20,
        zIndex: 1000,
        top: 20,
        backgroundColor: '#FFF',
        shadowColor: '#222',
        shadowOpacity: 0.5,
        shadowOffset: { width: 10, height: 10 },
        padding: 10,
        opacity: props.fadeOut,
        elevation: 10
    }}>

        {
            modalList.map((item, i) => (
                <ListItem key={i}>
                    <TouchableOpacity onPress={() => item.onPress()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Icons name={item.icon} size={25} />
                            <Text style={{
                                fontSize: 17,
                                marginHorizontal: 10,
                                textTransform:'capitalize'
                            }}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                </ListItem>
            ))
        }
    </Animated.View>
}