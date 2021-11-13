export const useGetMessage = (message = [], idConnect, idSearch = null, users) => {
    //je recupere la list de ces messages
    let isInArray = []
    let getMessage = []
    let countMessageWithId = []
    let getSenderAndReceiverMessages = []

    if (idSearch == null) {

        const messages = message.filter(item => {
            if (item.id_receiver == idConnect || item.id_sender == idConnect) return item
        })

        messages.forEach(el => {
            let ids = null
            const id_receiver = el.id_receiver
            const id_sender = el.id_sender
            if (id_receiver == idConnect && id_sender != idConnect) {
                ids = id_sender
            } else if (id_sender == idConnect && id_receiver != idConnect) {
                ids = id_receiver
            }
            if ((!el.read && el.id_sender == ids) && idConnect == el.id_receiver) {
                countMessageWithId.push(parseInt(ids))
            }

            users.forEach((user, index) => {
                if (user.id == ids) {
                    if (isInArray.indexOf(user.id) == -1) {
                        getMessage.push({ ...el, user: user })
                        isInArray.push(user.id)
                    }
                }
            })
        })
    } else if (idSearch != null) {
        let all = getSenderAndReceiverMessages.slice()
        message.forEach(item => {
            if ((item.id_receiver == idConnect && item.id_sender == idSearch)
                || (item.id_receiver == idSearch && item.id_sender == idConnect)) {
                getMessage = [...getMessage, item]
            }
        })
    }

    return [getMessage, countMessageWithId]
}