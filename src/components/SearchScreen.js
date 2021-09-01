import React, { Component } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { ListUser } from "utils/Listuser"
import Icons from 'react-native-vector-icons/Ionicons'


const AVATAR_SIZE = 80
const SPACING = 10

export default class SearchScreench extends Component {
    render() {
        return (
            <ScrollView>
                {
                    ListUser.map((item,index) => (
                        <TouchableOpacity key={index}>
                            <View style={{
                                marginBottom: SPACING,
                                backgroundColor: '#fff',
                                flexDirection: 'row',
                                shadowColor: "#000",
                                shadowOpacity: .5,
                                shadowOffset: { width: 0, height: 10 },
                                padding: SPACING,
                                marginTop: SPACING / 2,
                                marginHorizontal: SPACING,
                                borderRadius: 16
                            }}>
                                <Image source={item.image} style={{
                                    width: AVATAR_SIZE,
                                    height: AVATAR_SIZE,
                                    borderRadius: AVATAR_SIZE,
                                    marginRight: SPACING
                                }} />
                                <View>
                                    <Text style={{ fontSize: 20, fontWeight: '700' }}>{item.firstName} {item.lastName}</Text>
                                    <Text style={{ fontSize: 18, opacity: .7 }}>{item.age},ans</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Icons name="location-outline" size={20} />
                                        <Text style={{ fontSize: 16, opacity: .8, marginLeft: SPACING - 2 }}>{item.ville}</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        )
    }
}