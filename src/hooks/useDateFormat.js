import React from 'react'

const JOUR = ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam']
const MOIS = ['Jan', 'Fev', 'Mars', 'Avril',
    'Mai', 'Juin', 'Juillet', 'Août', 'Sep',
    'Oct', 'Nov', 'Dec'
]

export default (date) => {

    const today = new Date(Date.now()).setHours(0, 0, 0, 0).valueOf()
    const yesterDay = new Date((Date.now()).valueOf() - 1000 * 60 * 60 * 24).setHours(0, 0, 0, 0).valueOf()
    const nbr = new Date(date).setHours(0, 0, 0, 0).valueOf()

    const oldDay = new Date(date)
    const dateNow = new Date(Date.now())

    if (nbr == today) {
        return "Aujourd'huit"
    }
    if (nbr == yesterDay) {
        return 'Hier'
    }
    if (oldDay.getFullYear() < dateNow.getFullYear()) {
        return `${JOUR[oldDay.getDay()]} ${oldDay.getDate()} ${MOIS[oldDay.getMonth()]} ${oldDay.getFullYear()}`
    }
    if (oldDay.getMonth() == dateNow.getMonth()) {
        return `${JOUR[oldDay.getDay()]} ${oldDay.getDate()}`
    }

    if (oldDay.getMonth() < dateNow.getMonth()) {
        return `${JOUR[oldDay.getDay()]} ${oldDay.getDate()} ${MOIS[oldDay.getMonth()]}`
    }
}