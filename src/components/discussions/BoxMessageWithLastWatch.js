import useDateFormat from 'hooks/useDateFormat'
import { useGetMessage } from 'hooks/useGetMessage'
import useGetMessagePerDay from 'hooks/useGetMessagePerDay'
import React from 'react'
import { View } from 'react-native'
import LastWatch from './LastWatch'
import Receiver from './Receiver'
import Sender from './Sender'

const BoxMessageWithLastWatch = ({ data, session, user }) => {
    const [getMessage] = useGetMessage(data, session, user.id)
    const discussions = useGetMessagePerDay(getMessage)
    const box = []
    for (const [key, value] of discussions) {
        box.push(<Box key={key} watch={key} value={value} image={user.image} session={session} />)
    }

    return (
        <>{box}</>
    )
}

const Box = ({ watch, value, image, session }) => {
    const lastWatch = useDateFormat(watch)
    return (
        <View style={{ flex: 1 }}>
            <LastWatch lastWatch={lastWatch} />
            {value.map((item, i) => (
                <View key={i}>
                    {item.id_sender != session && (<Receiver item={item} image={image} />)}
                    {item.id_sender == session && (<Sender item={item} />)}
                </View>
            ))}
        </View>
    )
}

React.memo(BoxMessageWithLastWatch)

export default BoxMessageWithLastWatch