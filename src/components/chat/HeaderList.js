import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
import Icons from 'react-native-vector-icons/Ionicons'
import { ROYALBLUE_COLOR } from 'colors/ConstantColors'
import { ListUser } from 'utils/Listuser'

const AVATAR_SIZE = 70
const MARGIN = 20
const ITEM_WIDTH = AVATAR_SIZE * 2 - 45

export default class HeaderList extends Component {

    static propTypes = {
        data: PropTypes.array
    }

    constructor(props) {
        super(props)

        const scrollX = new Animated.Value(1)

        this.state = {
            offset: ITEM_WIDTH,
            scrollX,
            isScaled: false,
            currentIndex: null,
            tRef: null
        }
    }

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    width: ITEM_WIDTH,
                    padding: 10,
                }}
                activeOpacity={1}
            >
                <View style={{
                    alignItems: 'center',
                    height: 120,
                    overflow: 'hidden',
                }}>
                    <Avatar source={item.image} containerStyle={{
                        width: AVATAR_SIZE,
                        height: AVATAR_SIZE,
                        marginHorizontal: MARGIN,
                        borderWidth: 2.5,
                        borderColor: ROYALBLUE_COLOR,
                        padding: 2,
                        borderRadius: AVATAR_SIZE
                    }}
                        avatarStyle={{ borderRadius: AVATAR_SIZE }}
                    />
                    {/* <Badge status='error' containerStyle={{
                        position: 'absolute',
                        right: 0
                    }} badgeStyle={{
                        width: AVATAR_SIZE / 3,
                        height: AVATAR_SIZE / 3,
                        borderRadius: AVATAR_SIZE / 3,

                    }} value={2} textStyle={{
                        fontSize: 12
                    }} /> */}
                    <Text style={{
                        lineHeight: 20,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        marginTop: 5,
                    }}>{item.firstName} {item.lastName}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View>
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
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {ListUser.map((item, index) => this.renderItem({ item, index }))}
                </ScrollView>
            </View >
        )
    }
}