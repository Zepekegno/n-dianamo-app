import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import matchSelector from "stores/selectors/matchSelector";
import Matches from './matches'
const MatchScreen = (props) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={styles.container}>
                {props.match.map((item, i) => (
                    <Matches key={i}>
                        <Matches.Content>
                            <Matches.Item item={item} />
                        </Matches.Content>
                    </Matches>
                ))}
            </View>
        </ScrollView>
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

export default connect(matchSelector)(MatchScreen)