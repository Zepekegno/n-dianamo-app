import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ListUser } from 'utils/Listuser'
import CardUser from './CardUser'
import Explore from './Explore'

class MainExplore extends Component {
    renderCard = (item, index, animatedValue) => {
        return (
            <Explore key={index} item={item} animated={animatedValue} />
        )
    }
    emptyCard = () => {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#FFF",
                shadowOpacity: 0.5,
                shadowOffset: { width: 0, height: 5 },
                shadowColor: '#000',
                elevation: 20,
                padding: 40,
                flexDirection: 'row'
            }}>
                <Text style={{
                    fontSize: 20
                }}>Oops il n'y a plus de matches</Text>
            </View>
        )
    }
    render = () => {
        return (
            <View style={{ flex: 1 }}>
                <CardUser
                    data={ListUser}
                    renderCard={this.renderCard}
                    emptyCard={this.emptyCard}
                />
            </View>
        )
    }
}


export default MainExplore