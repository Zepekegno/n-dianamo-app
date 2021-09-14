import React from 'react'
import { StyleSheet, View } from 'react-native'
import CardMatches from "./index";
import { ListUser } from "../../utils/Listuser";
import LikedIcon from './LikedIcon';

export default () => {
    return (
        <View style={styles.container}>
            {[0, 1, 2].map((i) => {
                return (
                    <CardMatches key={i}>
                        <CardMatches.Content>
                            <CardMatches.Item item={ListUser[i]} />
                        </CardMatches.Content>
                    </CardMatches>
                )
            })}
        </View>
    )
}

//Styles
const styles = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            flexWrap: 'wrap'
        },
    }
)