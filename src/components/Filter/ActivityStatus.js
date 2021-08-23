import React, { useContext, useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import { FilterContext } from "./FilterContext";

export default ActivityStatus = () => {

    const [profile, setProfile] = useState(false)
    const [activity, setActivity] = useState(false)
    const { setValues } = useContext(FilterContext)

    const onProfileChecked = () => {
        setProfile(!profile)
        setValues({ profile: !profile })
    }

    const onActivityChecked = () => {
        setActivity(!activity)
        setValues({ 'activity': !activity })
    }

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>
            <CheckBox
                title="avec un profile"
                checked={profile}
                onPress={onProfileChecked}
            />
            <CheckBox
                title="Activité recente"
                style={{ left: 10 }}
                checked={activity}
                onPress={onActivityChecked}
            />
        </View>
    )
}