import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"

const AvatarLayout = (props) => {
    const { user } = props
    const uri = { uri: "http://192.168.8.101:8081/src" + user.image[0]?.source }
    return (
        <TouchableOpacity style={{}}>
            <View style={{
                width: 45,
                height: 45,
                backgroundColor: 'rgba(0,0,0,0.5)',
                borderRadius: 45,
                marginLeft: 8,
                marginTop: 5
            }}>
                <Image source={uri} style={{
                    flex: 1,
                    width: null,
                    height: null,
                    borderRadius: 35
                }} />

            </View>
        </TouchableOpacity>
    )
}

const mapStateToProps = (state) => {
    const data = state.users.filter(val => val.id == state.login.logedId)[0]
    return {
        user: data,
    }
}

export default connect(mapStateToProps)(AvatarLayout)