/**
 * @author Moussa Traoré
 * @param data
 * @example 
 * let m = [
 * {id:1, time:new Date(2020,2,3), message:'hello},
 * {id:2, time:new Date(2021,4,5), message:'hello},
 * {id:3, time:new Date(2020,2,3), message:'hello},
 * {id:4, time:new Date(2021,4,6), message:'hello},
 * ]
 * 
 * let filtered = useGetMessagePerDay(m)
 * filtered => [
 *  date-converted-to-number-2020 => [el1,el3]
 *  date-converted-to-number-2021 => [el2,el4]
 * ]
 * @returns a new MAP, the key is date converted to number
 */
export default (data = []) => {

    const MAPMESSAGEWIDTHDATE = new Map()
    let inAllDates = []

    data.forEach(e => {
        const times = new Date(e.time).setHours(0, 0, 0, 0).valueOf()
        if (inAllDates.indexOf(times) == -1) {
            inAllDates.push(times)
        }
    })

    inAllDates.sort().forEach(el => MAPMESSAGEWIDTHDATE.set(el, []))

    data.forEach(el => {
        const times = new Date(el.time).setHours(0, 0, 0, 0).valueOf()
        let d = []
        let cp = MAPMESSAGEWIDTHDATE.get(times)
        if (MAPMESSAGEWIDTHDATE.has(times)) {
            d.push(el)
        }
        cp = [...cp, ...d]
        MAPMESSAGEWIDTHDATE.set(times, cp)
    })

    return MAPMESSAGEWIDTHDATE
}