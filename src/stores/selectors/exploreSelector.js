/** select the all user dont matched the current user */
export default (state) => {
    let data = {
        users: []
    }

    let matchId = []

    state.match.forEach(el => {
        if (matchId.indexOf(el.id_matcher) == -1) {
            matchId.push(el.id_matcher)
        }
    });

    let d = state.users
    d = d.filter((value) => matchId.indexOf(value.id) == -1)

    data = { ...data, users: d }
    const filter = data.users.filter(value => value.id != state.login.logedId)

    return {
        users: filter,
        logedId: state.login.logedId,
    }
}