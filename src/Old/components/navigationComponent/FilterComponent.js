import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import { SCREEN_WIDTH } from 'App';
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import { ListItem, Slider, BottomSheet, CheckBox, Tooltip, Input, Button } from 'react-native-elements';

export const FilterComponent = ({ visible, pressHandler }) => {
    const [checkedF, setCheckedF] = useState(false)
    const [checkedH, setCheckedH] = useState(false)
    const [ageRange, setAgeRange] = useState(18)
    const [checked, setChecked] = useState(false)
    return (
        <BottomSheet isVisible={visible} onBackdropPress={pressHandler}>
            <ListItem>
                <ListItem.Content h3={true}>
                    <View style={{}}>
                        <TouchableWithoutFeedback onPress={pressHandler}>
                            <View style={{
                                backgroundColor: '#696969',
                                height: 10, width: 100,
                                marginHorizontal: 120,
                                marginTop: -15
                            }} />
                        </TouchableWithoutFeedback>
                        <Text style={{ fontSize: 20 }}>Sexe</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                title='Home'
                                iconRight
                                checked={checkedH}
                                onPress={() => setCheckedH(!checkedH)}
                                textStyle={{ fontSize: 20 }}
                                size={40}
                            />
                            <CheckBox
                                title='Femme'
                                iconRight
                                checked={checkedF}
                                onPress={() => setCheckedF(!checkedF)}
                                textStyle={{ fontSize: 20 }}
                                size={40}
                            />
                        </View>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 20 }}>Age</Text>
                        <Text style={{ textAlign: 'center', fontSize: 15, color: '#222' }}>Value : {ageRange}</Text>
                        <Slider value={ageRange}
                            step={1} maximumValue={60} minimumValue={18}
                            onValueChange={(value) => setAgeRange(value)}
                            animateTransitions={false}
                            thumbTouchSize={100}
                            style={{
                                width: SCREEN_WIDTH - 120,
                                height: 60,
                                marginHorizontal: 20
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                        <CheckBox
                            center
                            iconRight
                            title='Activité Recente'
                            checked={checked}
                            onPress={() => setChecked(!checked)}
                            textStyle={{ fontSize: 20 }}
                            size={40}
                        />
                    </View>
                </ListItem.Content>
            </ListItem>
        </BottomSheet>
    )
}
