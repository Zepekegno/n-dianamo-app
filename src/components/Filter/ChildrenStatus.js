import React, { useContext, useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import { FilterContext } from "./FilterContext";

export default ChildrenStatus = () => {
    const [children, setChildren] = useState(false)
    const { setValues } = useContext(FilterContext)

    const onChildrenChecked = () => {
        setChildren(!children)
        setValues({ 'childrenStatus': !children })
    }
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <CheckBox
                title="As des enfants"
                checked={children}
                onPress={onChildrenChecked}
            />
        </View>
    )
}