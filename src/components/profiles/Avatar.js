import { DIMGRAY_COLOR, ROYALBLUE_COLOR, WHITE_COLOR } from 'colors/ConstantColors'
import React from 'react'
import { Text, View } from 'react-native'
import { Avatar, Button, ListItem } from 'react-native-elements'

import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

export default ({ user }) => {
    return (
        <ListItem containerStyle={{
            // backgroundColor:AQUA_COLOR
        }}>
            <ListItem.Content>
                <View style={{
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    <Avatar source={user.image} containerStyle={{
                        width: 130, height: 130,
                        padding: 10
                    }} avatarStyle={{
                        borderRadius: 100,
                        borderColor: ROYALBLUE_COLOR,
                        borderWidth: 2
                    }} />
                    <View style={{
                        marginHorizontal: 5
                    }}>
                        <Text style={{
                            fontSize: 20
                        }}>{user.firstName} {user.lastName}</Text>
                        <Text style={{
                            fontSize: 20,
                            color: DIMGRAY_COLOR
                        }}>{user.age}, ans</Text>
                        <Button
                            title="Changer"
                            iconRight
                            icon={<Icons name="camera" size={25} color={WHITE_COLOR} />}
                            titleStyle={{
                                fontSize: 18,
                                marginTop: -2,
                                marginHorizontal: 5
                            }}
                            buttonStyle={{
                                backgroundColor: '#4169e1',
                                borderRadius: 8
                            }}
                            containerStyle={{
                                alignItems: 'center',
                                paddingTop: 10
                            }}
                            iconContainerStyle={{
                                marginHorizontal: 5
                            }}
                        />
                    </View>
                </View>
            </ListItem.Content>
        </ListItem>
    )
}