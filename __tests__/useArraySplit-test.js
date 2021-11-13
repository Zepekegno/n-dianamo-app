import useArraySplit from '../src/hooks/useArraySplit'
describe('Morcel un tableau', () => {
    it('true is truth', () => {
        expect(true).toBeTruthy()
    })

    it('test split with 2', () => {
        const array = [1, 2, 3, 4, 5]
        const final = [[1], [2], [3], [4], [5]]
        const splitArray = useArraySplit(array, 1)
        expect(final).toEqual(splitArray)
    })
    it('test split with 4', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        const final = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
        const splitArray = useArraySplit(array, 4)
        expect(final).toEqual(splitArray)
    })
})