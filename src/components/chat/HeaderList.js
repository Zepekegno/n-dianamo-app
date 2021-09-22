import React, { Component } from 'react'
import PropTypes, { array } from 'prop-types'
import { Animated, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Avatar, Badge } from 'react-native-elements'
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
        const t = `${item.firstName} ${item.lastName}`
        const arrayName = t.split(' ')
        const name = arrayName.length > 2 ? `${arrayName[0]} ${arrayName[1]}...` : `${arrayName[0]} ${arrayName[1]}`
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
                    <Text style={{
                        lineHeight: 20,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        marginTop: 5,
                        fontWeight: '700'
                    }}>{name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {ListUser.map((item, index) => this.renderItem({ item, index }))}
            </ScrollView>
        )
    }
}