import React from 'react'

export default (type) => {
    let icon = 'heart'
    let color = 'red'
    if (type === 2) {
        icon = 'star'
        color = "green"
    }
    return {
        name: icon,
        color: color,
        size: 20
    }
}