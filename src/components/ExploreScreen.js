import React, { Component } from "react";
import Icons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

import MainExplore from "./explore/MainExplore";
import { AuthContext } from "App";

export default class ExploreScreen extends Component {

    render() {
        return (
            <MainExplore session={1} />
        )
    }
}