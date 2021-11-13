import React from 'react'
import CardMatches from './CardMatches'
import Content from './Content'
import Item from './Item'

export default ({ item, size }) => {
    return (
        <CardMatches size={size}>
            <Content>
                <Item item={item} />
            </Content>
        </CardMatches>
    )
}