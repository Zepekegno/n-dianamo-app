import randomTime from "utils/randomTime"

export default () => {
    return [
        {
            id: '1',
            id_sender: '2',
            id_receiver: '1',
            message: 'hello pote',
            time: randomTime(),
            read: true
        },

        {
            id: '2',
            id_sender: '2',
            id_receiver: '1',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: true
        },
        {
            id: '3',
            id_sender: '4',
            id_receiver: '1',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: true
        },
        {
            id: '4',
            id_sender: '5',
            id_receiver: '1',
            message: 'hello pote',
            time: randomTime(),
            read: false
        },
        {
            id: '5',
            id_sender: '6',
            id_receiver: '1',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: true
        },
        {
            id: '6',
            id_sender: '1',
            id_receiver: '7',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: false
        },
        {
            id: '7',
            id_sender: '8',
            id_receiver: '1',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: true
        },
        {
            id: '8',
            id_sender: '2',
            id_receiver: '1',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: false
        },
        {
            id: '9',
            id_sender: '2',
            id_receiver: '1',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: true
        },
        {
            id: '10',
            id_sender: '2',
            id_receiver: '1',
            message: 'comment tu vas pote',
            time: randomTime(),
            read: false
        },
    ]
}