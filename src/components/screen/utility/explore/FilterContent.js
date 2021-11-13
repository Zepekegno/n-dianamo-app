import { continueStatement } from "@babel/types";
import CheckBox from "components/utility/CheckBox";
import { SCREEN_HEIGHT } from "config/config";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Animated, TouchableOpacity, SliderComponent } from "react-native";
//import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

export default () => {

    const [direction, setDirection] = useState({ left: true, right: false })
    const [lookingFor, setLookingFor] = useState('homme')
    const [pitureCheked, setPictureCheked] = useState(false)
    const [con, setCon] = useState(false)
    const [containerHeigth, setContainerHeigth] = useState()

    onSwitch = () => {
        if (!direction.right) {
            setDirection({ right: true, left: false })
            setLookingFor('femme')
            console.log('hh')
        } else if (!direction.left) {
            setDirection({ right: false, left: true })
            setLookingFor('homme')
        }
    }

    const position = () => {
        if (direction.right) {
            return {
                right: 0
            }
        } else if (direction.left) {
            return {
                left: 0
            }
        } else {
            return {
                left: 0
            }
        }
    }

    const handlePitureChecked = (checked) => {
        setPictureCheked(checked)
    }
    const handleConChecked = (checked) => {
        setCon(checked)
    }

    return (
        <View style={styles.container}>
            <View style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Text style={{
                    fontSize: 18
                }}>Je cherche un(e)</Text>
                <TouchableOpacity activeOpacity={1} onPress={onSwitch}>
                    <View style={styles.toggleContent}>
                        <Text style={{
                            zIndex: 100,
                            color: direction.left ? "#fff" : '#222',
                            fontSize: 16,
                            textTransform: 'uppercase',
                            fontWeight: '700',

                        }}>Homme</Text>
                        <Text style={{
                            zIndex: 100,
                            color: direction.right ? "#fff" : '#222',
                            fontSize: 16,
                            textTransform: 'uppercase',
                            fontWeight: '700',

                        }}>Femme</Text>
                        <View style={[{
                            backgroundColor: 'red',
                            width: '60%',
                            height: '100%',
                            position: 'absolute',

                        }, position()]} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 18
                }}>Distance maximum</Text>
                <Text style={{
                    fontSize: 18
                }}>20 km</Text>

            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 18
                }}>Tranche d'age</Text>
                <Text style={{
                    fontSize: 18
                }}>18-25 ans</Text>

            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 18
                }}>Avec photo</Text>
                <CheckBox title='hello' onChecked={handlePitureChecked} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 30
            }}>
                <Text style={{
                    fontSize: 18
                }}>Connection recente</Text>
                <CheckBox title='hello' onChecked={handleConChecked} />
            </View>
            <View style={{
                position: 'absolute',
                bottom: '25%',
                alignSelf: 'center'
            }}>
                <TouchableOpacity style={{
                    backgroundColor: 'red',
                    borderRadius: 15,
                    paddingHorizontal: 25,
                    paddingVertical: 10
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: '#fff'
                    }}>Sauvegarder</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        position: 'relative',
        borderWidth: 1,
        height: '100%'
    },
    toggleContent: {
        width: 150,
        height: 30,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 25,
        overflow: 'hidden',
        borderColor: 'red'
    }
})