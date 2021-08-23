import React, {useContext, useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import { FilterContext } from "./FilterContext";

export default YearInterval = () => {

    const [year, setYear] = useState(false)
    const { setValues } = useContext(FilterContext)

    const onYearChecked = () => {
        setYear(!year)
        setValues({ 'year': !year })
    }
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <CheckBox title="18-30" checked={year} onPress={onYearChecked}/>
            <CheckBox title="30-50" checked={year} onPress={onYearChecked}/>
            <CheckBox title="50+" checked={year} onPress={onYearChecked}/>
        </View>
    )
}