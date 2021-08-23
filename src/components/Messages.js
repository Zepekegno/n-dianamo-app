import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "react-native-elements";

//import React Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import IconSimple from 'react-native-vector-icons/SimpleLineIcons'

// Import colors
import {LIGHTSEAGREEN_COLOR, ROYALBLUE_COLOR, WHITE_COLOR } from "colors/ConstantColors";

import { ListUser } from "utils/Listuser";

export default class Messages extends Component {

    static navigationOptions = (params) => {
        const { route, navigation } = params
        return {
            title: ListUser[0].firstName,
            headerRight: () => {
                return (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal:5
                    }}>
                        <TouchableOpacity style={{
                            marginHorizontal: 10
                        }}>
                            <Icons name="call" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginHorizontal: 10
                        }}>
                            <Icons name="videocam" size={25} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            marginHorizontal: 5
                        }}>
                            <IconSimple name="options-vertical" size={25} />
                        </TouchableOpacity>
                    </View>
                )
            }
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    flex: 10
                }}>

                    <View style={styles.msBoxR}>
                        <Text style={styles.msTextR}>Hello frere</Text>
                    </View>
                    <View style={styles.msBoxS}>
                        <Text style={styles.msTextS}>How are you Frere</Text>
                    </View>

                </View>
                <View style={{
                    flex: 1
                }}>
                    <Input placeholder='message' multiline={true} scrollEnabled={true} rightIcon={() => (
                        <TouchableOpacity>
                            <Ionicons name="send" color={ROYALBLUE_COLOR} size={25} />
                        </TouchableOpacity>
                    )}
                        inputStyle={{
                            fontSize: 20
                        }}
                        inputContainerStyle={{
                            borderBottomWidth: 0
                        }}
                    />
                </View>
            </View>
        )
    }
}

{/* */ }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    msBoxR: {
        alignSelf: 'flex-start',
        marginHorizontal: 15,
        backgroundColor: 'tomato',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginVertical: 5
    },
    msBoxS: {
        alignSelf: 'flex-end',
        marginHorizontal: 15,
        backgroundColor: LIGHTSEAGREEN_COLOR,
        shadowColor: WHITE_COLOR,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 15,
        marginVertical: 5
    },
    msTextS: {
        fontSize: 18,
        color: WHITE_COLOR
    },
    msTextR: {
        fontSize: 18,
        color: WHITE_COLOR
    }
})