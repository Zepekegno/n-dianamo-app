/** get users matched list */

export default (state) => {

    let getUserAndMatch = []


    const { logedId } = state.login
    const matchFilter = state.match.data.filter(val => val.id_matched == logedId)

    state.users.data.forEach(u => {
        const d = []
        matchFilter.forEach(m => {
            if (u.id == m.id_matcher) {
                let d = {
                    ...u,
                    matchType: m.type
                }
                getUserAndMatch.push(d)
            }
        })
    })

    const data = getUserAndMatch.sort((a, b) => a.id > b.id ? -1 : 0)

    return {
        match: data
    }
}