import React, { useState } from "react"
import { Modal, View, TouchableOpacity, Text } from "react-native"

export default ({ isVisible }) => {
    const [visible, setVisible] = useState(isVisible)

    return (
        <View style={{ flex: 1 }}>
            <Modal
                visible={visible}
                animationType="slide"
                presentationStyle="pageSheet"
            >
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Text>close Modal</Text>
                </TouchableOpacity>
                <Text>Hello Modal</Text>
            </Modal>
        </View>
    )
}