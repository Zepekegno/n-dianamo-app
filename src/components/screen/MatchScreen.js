/** react and library */
import React from "react"
import {
    ScrollView, StyleSheet,
    Text, TouchableOpacity, View
} from "react-native"

/** const colors */
import { CRIMSON_COLOR } from "colors/ConstantColors"

/** redux store */
import { connect } from "react-redux"
import matchSelector from "../../stores/selectors/matchSelector"
import Match from "./utility/match/Match"
import TopBarMatch from "./utility/match/TopBarMatch"
import { APP_CONTENT_BACKGROUND, APP_HEADER_BACKGROUND_PRIMARY } from "config/config"


/** component */


const MatchScreen = (props) => {

    return (
        <View style={{
            flex: 1,
            backgroundColor: APP_HEADER_BACKGROUND_PRIMARY,
        }}>
            <TopBarMatch />
            <ScrollView contentContainerStyle={styles.container}>
                {props.match.map((item, i) => (
                    <Match key={i} item={item} size={props.match.length} />
                ))}
            </ScrollView>
        </View>
    )

}

//Styles
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            backgroundColor: APP_CONTENT_BACKGROUND
        },
    }
)

export default connect(matchSelector)(MatchScreen)