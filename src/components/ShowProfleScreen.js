import React, { Component } from "react"
import { FlatList, Image, ScrollView, Text, TouchableWithoutFeedback, View } from "react-native"
import PropTypes from 'prop-types'

import Icons from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

import { ListUser } from "utils/Listuser"
import { Avatar, Button, CheckBox } from "react-native-elements"
import { AQUAMARINE_COLOR, AQUA_COLOR, CRIMSON_COLOR, LIGHTSEAGREEN_COLOR, SEAGREEN_COLOR } from "colors/ConstantColors"

const user = ListUser[0]

const list = [
    {
        title: 'Family Status'
    },
    {
        title: 'Children'
    },

]

const data = ListUser.map((item, i) => item.image)

export default class ShowProfleScreen extends Component {

    static navigationOptions = (props) => {
        console.log(props.navigation)
        return {
            title: `${ListUser[props.route.params.id].firstName} ${ListUser[props.route.params.id].lastName}`
        }
    }

    render = () => {
        return (
            <View style={{ flex: 1, padding: 10, position: 'relative' }}>
                <View style={{ flex: 1, alignItems: 'center', }}>
                    <Avatar source={user.image} containerStyle={{
                        width: 150,
                        height: 150
                    }}
                        avatarStyle={{
                            borderRadius: 100
                        }}
                    />
                    <Text style={{
                        fontSize: 20, marginVertical: 10
                    }}>{user.firstName} {user.lastName}, {user.age}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icons name="school" size={20} color="red" />
                        <Text
                            style={{
                                fontSize: 20,
                                marginHorizontal: 10
                            }}>{user.school}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icons name="location" size={20} color="red" />
                        <Text style={{
                            fontSize: 20,
                            marginHorizontal: 10
                        }}>33 km</Text>
                    </View>
                </View>
                <View style={{ flex: 1, borderWidth: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontSize: 18,
                            marginBottom: 10,
                        }}>Recent Picture</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {[0, 1, 2].map((item, i) => (<View key={i} style={{
                                width: 15,
                                height: 15,
                                backgroundColor: i == 0 ? 'red' : AQUAMARINE_COLOR,
                                borderRadius: 100,
                                marginHorizontal: 5
                            }} />))}
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}>
                        {
                            data.map((item, i) => (
                                <ImageItem key={i} item={item} />
                            ))
                        }
                    </View>
                </View>
                <View style={{ flex: 1, borderWidth: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontSize: 20,
                        }}>Have Children</Text>
                        <CheckBox disabled checked={user.children} />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{
                            fontSize: 20,
                        }}>Family Status</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox title={user.status} disabled checked={true} />
                        </View>
                    </View>
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    position: 'absolute',
                    bottom: 0,
                    right: 0
                }}>
                    <Button
                        icon={<Material name="close" size={25} color="#fff" />}
                        containerStyle={{
                            marginBottom: 10
                        }}
                        buttonStyle={{
                            backgroundColor: CRIMSON_COLOR,
                            borderRadius: 100,
                            padding: 15,
                        }}
                    />
                    <Button
                        icon={<Material name="star" size={25} color="#fff" />}
                        containerStyle={{
                            marginBottom: 10
                        }}
                        buttonStyle={{
                            backgroundColor: LIGHTSEAGREEN_COLOR,
                            borderRadius: 100,
                            padding: 15
                        }}
                    />
                    <Button
                        icon={<Material name="heart" size={25} color="#fff" />}
                        containerStyle={{
                            marginBottom: 10
                        }}
                        buttonStyle={{
                            backgroundColor: SEAGREEN_COLOR,
                            borderRadius: 100,
                            padding: 15
                        }}
                    />
                </View>
            </View>
        )
    }
}

const ImageItem = ({ item }) => {
    return (
        <View style={{ width: 100, height: 120, marginHorizontal: 10 }}>
            <Image source={item} style={{
                width: null,
                height: null,
                flex: 1,
                borderRadius: 20,
            }} />
        </View>
    )
}

// <View style={{
//     position: 'absolute',
//     elevation: 10,
//     top: 90
// }}>
//     <TouchableWithoutFeedback>
//         <View style={{
//             backgroundColor: 'red',
//             width: 50,
//             height: 50,
//             borderRadius: 100,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginHorizontal: 20,
//             marginVertical: 15
//         }}>
//             <Icons name='close' size={30} color='#FFF' />
//         </View>

//     </TouchableWithoutFeedback>
//     <TouchableWithoutFeedback>
//         <View style={{
//             backgroundColor: 'blue',
//             width: 50,
//             height: 50,
//             borderRadius: 100,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginHorizontal: 20,
//             marginVertical: 15
//         }}>
//             <Icons name='star' size={30} color='#fff' />
//         </View>

//     </TouchableWithoutFeedback>
//     <TouchableWithoutFeedback>
//         <View style={{
//             backgroundColor: 'green',
//             width: 50,
//             height: 50,
//             borderRadius: 100,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginHorizontal: 20,
//             marginVertical: 15
//         }}>
//             <Icons name='heart' size={30} color="#fff" />
//         </View>

//     </TouchableWithoutFeedback>
// </View>
// <View style={{ flex: 1 }}>
//     <View style={{
//         width: 400,
//         height: 450
//     }}>
//         <Image resizeMethod="resize" source={user.image} style={{
//             width: null,
//             height: null,
//             flex: 1,
//         }} />
//     </View>
//     <View style={{
//         position:'absolute',
//         bottom:130,
//         backgroundColor:'#fff',
//         left:0,
//         flexDirection:'row',
//         paddingHorizontal:10,
//         paddingVertical:5,
//         borderTopRightRadius:5
//     }}>
        // <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        //     <Icons name="school" size={20} />
        //     <Text
        //         style={{
        //             fontSize: 20,
        //             marginHorizontal: 10
        //         }}>{user.school}</Text>
        // </View>
        // <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        //     <Icons name="location" size={20} />
        //     <Text style={{
        //         fontSize: 20,
        //         marginHorizontal: 10
        //     }}>33 km</Text>
        // </View>
//     </View>
//     <View style={{ flex: 1 }}>
//         <ScrollView>
            // <View>
            //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //         <Text style={{
            //             fontSize: 20,
            //         }}>Have Children</Text>
            //         <CheckBox disabled checked={user.children} />
            //     </View>
            //     <View style={{}}>
            //         <Text style={{
            //             fontSize: 20,
            //         }}>Family Status</Text>
            //         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //             <CheckBox title='Single' disabled checked={user.status == 'single' ? true : false} />
            //             <CheckBox title='Maried' disabled checked={user.status == 'maried' ? true : false} />
            //             <CheckBox title='Divorced' disabled checked={user.status == 'divorced' ? true : false} />
            //         </View>
            //     </View>
            //     <View style={{}}>
            //         <Text style={{
            //             fontSize: 20,
            //             marginBottom: 10
            //         }}>Recent Profile </Text>
            //         <FlatList horizontal data={data} renderItem={ImageItem} keyExtractor={(item, index) => index} />
            //     </View>

            // </View>
//         </ScrollView>
//     </View>
// </View>