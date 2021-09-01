export default ()=>{
    const hrs = Math.round(Math.random()*12)
    const mins = Math.round(Math.random()*60)
    const hFormat = hrs < 10 ? '0':''
    const mFormat = mins < 10 ? '0':''
    const type = hrs < 12 ? 'AM' : 'PM'

    return String(hFormat + hrs + ':' + mFormat + mins + ' '+ type)
}