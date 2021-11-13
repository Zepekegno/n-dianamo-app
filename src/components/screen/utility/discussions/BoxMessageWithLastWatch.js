import useDateFormat from 'hooks/useDateFormat'
import { useGetMessage } from 'hooks/useGetMessage'
import useGetMessagePerDay from 'hooks/useGetMessagePerDay'
import React from 'react'
import { Text, View } from 'react-native'
import { Avatar } from 'react-native-elements'

import LastWatch from './LastWatch'
import Receiver from './Receiver'
import Sender from './Sender'

const BoxMessageWithLastWatch = ({ data, user, currentUser }) => {

    const [getMessage] = useGetMessage(data, currentUser.id, user.id)
    const discussions = useGetMessagePerDay(getMessage)
    const box = []
    const cp = Array.from(discussions).slice()
    const lastData = cp.pop()
    for (const [key, value] of discussions) {

        box.push(<Box key={key} watch={key} value={value} lastData={lastData} currentUser={currentUser} image={user.image[0].source} />)
    }

    return (
        <>{box}</>
    )
}

const Box = ({ watch, value, image, currentUser, lastData }) => {

    const lastWatch = useDateFormat(watch)

    let last = null
    lastData.shift()
    const d = lastData.pop()
    if (d != undefined) {
        last = d[0]
    }
    console.log('last :', last)

    return (
        <View style={{ flex: 1 }}>
            <LastWatch lastWatch={lastWatch} />
            {value.map((item, i) => (
                <View key={i}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        {item.id_sender != currentUser.id && (<Receiver item={item} image={image} last={last} />)}
                        <Text>{last != null ? item.id : ''}</Text>
                    </View>
                    {item.id_sender == currentUser.id && (<Sender item={item} image={currentUser.image[0].source} last={lastData} />)}

                </View>
            ))}

        </View>
    )
}

export default React.memo(BoxMessageWithLastWatch)

// (
//     <Avatar source={{ uri: image }}
//         containerStyle={{
//             alignSelf: 'center',
//             borderWidth: 1,
//             borderColor: 'blue',
//             width: 20,
//             height: 20,
//             borderRadius: 20,
//             padding: 2,
//             alignSelf: 'flex-end'
//         }}
//         avatarStyle={{
//             borderRadius: 20,
//         }}
//     />
// )