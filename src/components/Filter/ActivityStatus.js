import { CRIMSON_COLOR } from "colors/ConstantColors";
import React, { useContext, useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import { FilterContext } from "./FilterContext";

export default ActivityStatus = () => {

    const [profile, setProfile] = useState(false)
    const [activity, setActivity] = useState(false)

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }}>
            <CheckBox
                title="avec un profile"
                checked={profile}
                onPress={() => setProfile(!profile)}
                checkedColor={CRIMSON_COLOR}
            />
            <CheckBox
                title="Activité recente"
                style={{ left: 10 }}
                checked={activity}
                onPress={() => setActivity(!activity)}
                checkedColor={CRIMSON_COLOR}
            />
        </View>
    )
}