/** get users matched list */

export default (state) => {

    let ids = []
    let getUserAndMatch = []

    state.match.forEach(el => {
        ids.push(el.id_matcher)
    });


    state.users.forEach(u => {
        const d = []
        state.match.forEach(m => {
            if (u.id == m.id_matcher) {
                let l = {
                    ...u,
                    matchType: m.type
                }
                getUserAndMatch.push(l)
            }
        })
    })

    const data = getUserAndMatch.sort((a, b) => a.id > b.id ? -1 : 0)

    return {
        match: data
    }
}