import React from 'react'
import useDateFormat from '../src/hooks/useDateFormat'
describe('get date formated', () => {
    it('true is true', () => {
        expect(true).toBeTruthy()
    })
    it('format and return text to be equal today', () => {
        const date = new Date(Date.now())
        const dateFormat = useDateFormat(date, 'fr-Fr', false)
        expect(dateFormat).toEqual('today')
    })
    it('format and return text to be equal yesterDay', () => {
        const date = new Date(2021, 8, 20, 12, 30, 45, 9564)
        const dateFormat = useDateFormat(date, 'fr-Fr', false)
        expect(dateFormat).toEqual('yesterDay')
    })
    it('year is not now year', () => {
        const date = new Date(2020, 0, 20, 12, 30, 45, 9564)
        const dateFormat = useDateFormat(date, 'fr-Fr', false)
        expect(dateFormat).toEqual('lun 20 Jan 2020')
    })
    it('month is equal month now', () => {
        const date = new Date(2021, 8, 15, 12, 30, 45, 9564)
        const dateFormat = useDateFormat(date, 'fr-Fr', false)
        expect(dateFormat).toEqual('mer 15')
    })
    it('month is last month now', () => {
        const date = new Date(2021, 7, 15, 12, 30, 45, 9564)
        const dateFormat = useDateFormat(date, 'fr-Fr', false)
        expect(dateFormat).toEqual('dim 15 Août')
    })
})
