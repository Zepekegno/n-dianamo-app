import React from 'react'
import useGetMessagePerDay from '../src/hooks/useGetMessagePerDay'

const today = new Date(Date.now())
const yesterDay = new Date(2021, 8, 20)
const otherDay = new Date(2021, 7, 22)

const message = [
    {
        id: 1,
        id_sender: 2,
        id_receiver: 1,
        time: today,
        message: 'hello world',
        read: false
    },
    {
        id: 2,
        id_sender: 1,
        id_receiver: 2,
        time: today,
        message: 'hello world',
        read: false
    },
    {
        id: 3,
        id_sender: 2,
        id_receiver: 1,
        time: yesterDay,
        message: 'hello world',
        read: false
    },
    {
        id: 4,
        id_sender: 1,
        id_receiver: 2,
        time: yesterDay,
        message: 'hello world',
        read: false
    },
    {
        id: 5,
        id_sender: 2,
        id_receiver: 1,
        time: otherDay,
        message: 'hello world',
        read: false
    },
    {
        id: 6,
        id_sender: 2,
        id_receiver: 1,
        time: otherDay,
        message: 'hello world',
        read: false
    }
]

const finalResult = useGetMessagePerDay(message)

describe('Get messages with same date', () => {
    it('test true equal true', () => {
        expect(true).toBeTruthy()
    })

    it('the contain tobe equal', () => {
        const getMessage = useGetMessagePerDay(message)
        expect(getMessage).toEqual(finalResult)
    })

    it('the size will be exact 3', () => {
        const getMessage = useGetMessagePerDay(message)
        expect(getMessage.size).toEqual(3)
    })
})