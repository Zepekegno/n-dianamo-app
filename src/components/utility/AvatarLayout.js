import { BASE_URL_LOCAL_STORAGE } from "config/config"
import { useGetNavigation } from "hooks/useGetNavigation"
import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"

const AvatarLayout = (props) => {


    const { user } = props

    //const uri = { uri: `${BASE_URL_LOCAL_STORAGE}/src/${user?.image[0].source}` }


    return (
        <View style={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: 40,
            marginHorizontal: 15
        }}>

            <Image source={{ uri: user.image[0].source }} style={{
                flex: 1,
                width: null,
                height: null,
                borderRadius: 35
            }} />

        </View>
    )
}

const mapStateToProps = (state) => {
    const data = state.users.data.filter(val => val.id == state.login.logedId)[0]

    return {
        user: data,
    }
}

export default connect(mapStateToProps)(AvatarLayout)