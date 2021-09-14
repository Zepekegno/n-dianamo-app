import { createStackNavigator } from "@react-navigation/stack";
import { BLUE_COLOR, CRIMSON_COLOR, DIMGRAY_COLOR, LIGHTSEAGREEN_COLOR, ROYALBLUE_COLOR, WHITE_COLOR } from "colors/ConstantColors";
import React, { Component } from "react";
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Badge, SearchBar } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/SimpleLineIcons'
import { ListUser } from "utils/Listuser";
import Messages from "./Messages";
import Header from "./HeaderComponent";

const ChatStack = createStackNavigator()

export default class ChatScreen extends Component {

    static BottomTabNavigationOptions = (props) => {
        return {
            tabBarIcon: ({ focused, color }) => {
                return <Ionicons name='chatbubbles-outline' size={25} color={color} />
            },
            tabBarBadge: 2,
            tabBarBadgeStyle: {
                top: -2
            }
        }
    }

    render() {

        return (
            <ChatStack.Navigator>
                <ChatStack.Screen name='Messages'>
                    {(props) => <ChatMessages {...props} />}
                </ChatStack.Screen>
            </ChatStack.Navigator>
        )
        // return (
        //     <>
        //         <Header component={<HeaderContent/>} />
        //         <ChatMessages navigation={this.props.navigation}/>
        //     </>
        // )
    }
}

const HeaderContent = () => {
    return (
        <>
            <Text style={{
                fontSize: 22,
                color: DIMGRAY_COLOR,
                marginHorizontal: 10
            }}>Messages</Text>
            <TouchableOpacity>
                <Icons name="options-vertical" size={20} />
            </TouchableOpacity>
        </>
    )
}

const HearderRightTopBtn = () => {
    return (
        <TouchableOpacity>
            <Icons name="options-vertical" size={20} />
        </TouchableOpacity>
    )
}

const MessageHeaderTopBtn = () => {
    return (
        <View style={{
            flexDirection: 'row',
            marginHorizontal: 10
        }}>
            <TouchableOpacity style={{
                marginHorizontal: 10
            }}>
                <Ionicons name='call-outline' size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={{
                marginHorizontal: 10
            }}>
                <Ionicons name='videocam-outline' size={25} />
            </TouchableOpacity>
        </View>
    )
}

const ChatMessages = ({ navigation }) => {
    return (
        <View>
            <SearchBar round inputContainerStyle={{
                backgroundColor: '#f5f5f5', borderWidth: 1,
                marginBottom: 5, borderBottomWidth: 1
            }} containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: "" }} />
            <FlatList
                renderItem={(props) => (<ListMessage navigation={navigation} {...props} />)}
                keyExtractor={(item, index) => item.id}
                data={ListUser}
                ListHeaderComponent={<MsgListHeader data={ListUser} navigation={navigation} />}
            />
        </View>
    )
}

class MsgListHeader extends Component {

    static propTypes = {
        data: PropTypes.array
    }

    renderItem = ({ item }) => {
        const { navigation } = this.props
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Messages', { id: item.id })} style={{
                alignItems: 'center'
            }}>
                <View style={{}}>
                    <Avatar source={item.image} containerStyle={{
                        width: 80,
                        height: 80,
                        marginHorizontal: 20,
                        marginVertical: 8
                    }}
                        avatarStyle={{
                            borderRadius: 100,
                            borderWidth: 2.5,
                            borderColor: ROYALBLUE_COLOR
                        }}
                    />
                    <Badge status='error' containerStyle={{
                        position: 'absolute',
                        top: 5,
                        right: 20,
                    }} badgeStyle={{
                        width: 25,
                        height: 25,
                        borderRadius: 100,

                    }} value={2} textStyle={{
                        fontSize: 10
                    }} />
                </View>
                <Text style={{
                    marginBottom: 10
                }}>{item.firstName} {item.lastName}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={this.renderItem}
                data={this.props.data}
                keyExtractor={(item, index) => item.id.toString()}
            />
        )
    }
}

const ListMessage = ({ item, index, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Messages', { id: index })} style={styles.container}>
            <View style={styles.msg}>
                <Avatar source={item.image} containerStyle={{
                    height: 70,
                    width: 70,
                }} avatarStyle={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    borderRadius: 100
                }} />
                <View style={{ marginHorizontal: 15 }}>
                    <Text style={styles.msgTitle}>{item.firstName} {item.lastName}</Text>
                    <Text style={styles.msgContent}>Last Message</Text>
                </View>
            </View>
            <View>
                <Text style={styles.msgTimes}>22h:30min</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', padding: 10
    },
    msg: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    msgTitle: {
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    msgContent: {
        color: DIMGRAY_COLOR,
        marginTop: 5,
        fontSize: 15
    },

    msgTimes: {
        fontWeight: '300',
        color: DIMGRAY_COLOR
    }
})