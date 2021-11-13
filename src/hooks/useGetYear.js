export default (fullYear) => {
    const split = fullYear.split('/')
    const day = parseInt(split[0])
    const month = parseInt(split[1])
    const years = parseInt(split[2])
    const s = new Date(Date.now()).setHours(0, 0, 0, 0).valueOf() - new Date(years, month, day).valueOf()
    const year = Math.round(new Date(s).getTime() / (365 * (24 * 60 * 60 * 1000)))
    return year
}