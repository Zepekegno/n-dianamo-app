import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import matchSelector from 'stores/selectors/matchSelector'

const AVATAR_SIZE = 60


/** Header List content matched users for chatScreen */
class HeaderList extends Component {

    constructor(props) {
        super(props)
    }

    gotoChat = () => {

    }

    renderItem = ({ item, index }) => {
        const split = item.firstname.split(' ')
        const name = split[0]
        return (
            <TouchableOpacity
                key={index}
                style={{
                    marginLeft: 0,
                }}
                onPress={this.gotoChat}
            >
                <View style={{

                }}>
                    <View style={{
                        width: AVATAR_SIZE,
                        height: AVATAR_SIZE,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: AVATAR_SIZE,
                        marginHorizontal: 10,
                    }}>

                        <Image source={{ uri: item.image[0].source }} style={{
                            flex: 1,
                            width: null,
                            height: null,
                            borderRadius: AVATAR_SIZE
                        }} />

                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 5
                    }}>
                        <Text style={{ fontSize: 16, color: '#fff' }}>{name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={{
                marginVertical: 10
            }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    {this.props.match.map((item, index) =>
                        this.renderItem({ item, index }))}
                </ScrollView>
            </View>
        )
    }
}


export default connect(matchSelector)(HeaderList)