import randomTime from "utils/randomTime"

const TODAY = new Date(Date.now())
const SAMES = new Date(2021, 8, 19, 23, 8, 45, 2300)

export const getTime = (year, month, day, hours, minutes, seconds, milliSconds) => {
    return new Date(year, month, day, hours, minutes, seconds, milliSconds).getTime()
}

export default () => {
    return [
        {
            id: 1,
            id_sender: '1',
            id_receiver: '2',
            message: 'Parmi les instructions',
            time: new Date(2021, 8, 19, 20, 8, 45, 2300),
            read: true
        },

        {
            id: 2,
            id_sender: '2',
            id_receiver: '1',
            message: 'précédentes, une utilise des crochets',
            time: new Date(2020, 4, 25, 21, 50, 30, 7456),
            read: true
        },
        {
            id: 3,
            id_sender: '3',
            id_receiver: '1',
            message: 'on appelle ceci un « littéral de tableau » ou un « initialisateur de tableau ». ',
            time: new Date(2021, 8, 19, 22, 9, 45, 2300),
            read: true
        },
        {
            id: 4,
            id_sender: '1',
            id_receiver: '3',
            message: 'Si on souhaite initialiser un tableau avec un seul élément et que cet élément est un nombre, il est nécessaire d\'utiliser la notation littérale.',
            time: new Date(2021, 8, 19, 23, 8, 45, 2300),
            read: true
        },
        {
            id: 5,
            id_sender: '1',
            id_receiver: '2',
            message: 'Cette notation est plus courte que les autres et est souvent préférée pour sa lisibilité.',
            time: TODAY,
            read: false
        },
        {
            id: 6,
            id_sender: '2',
            id_receiver: '1',
            message: ' Pour plus d\'informations sur cette notation, voir la page sur les littéraux de tableaux pour plus détails.',
            time: TODAY,
            read: true
        },
        {
            id: 7,
            id_sender: '3',
            id_receiver: '1',
            message: 'Afin de créer un tableau de longueur non nulle mais sans aucun élément initialisé, on peut utiliser l\'une des deux instructions suivantes :',
            time: TODAY,
            read: false
        },
    ]
}