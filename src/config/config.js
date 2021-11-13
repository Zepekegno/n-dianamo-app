import { Dimensions } from 'react-native'
import axios from 'axios'

/** global constants */
export const BASE_URL_SERVER = "http://192.168.8.101:3200"

export const BASE_URL_LOCAL_STORAGE = 'http://192.168.8.101:8081'

export const SCREEN_WIDTH = Dimensions.get('window').width

export const SCREEN_HEIGHT = Dimensions.get('window').height

export const API = axios.create({
    baseURL: BASE_URL_SERVER,
})

export const APP_HEADER_BACKGROUND_PRIMARY = '#dc143c'
export const APP_HEADER_BACKGROUND_SECONDARY = '#00ff7f'

export const APP_COLOR__PRIMARY = '#FFF'
export const APP_COLOR_SECONDARY = '#000000'

export const APP_SHADOW_COLOR__PRIMARY = '#000000'
export const APP_SHADOW_COLOR__SECONDARY = '#FFF'

export const APP_CONTENT_BACKGROUND = '#FFF'