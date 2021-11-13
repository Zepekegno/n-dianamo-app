/** select the all user dont matched the current user */
export default (state) => {

    let data = []

    const logedId = state.login.logedId


    if (state.match.data?.length == 0) {

        data = state.users.data.filter(val => val.id != state.login.logedId)

    } else {

        let matchId = []

        state.match.data?.forEach(el => {

            if (el.id_matcher != logedId && el.id_matched == logedId) {
                if (matchId.indexOf(el.id_matcher) == -1) {
                    matchId.push(el.id_matcher)
                }
            } else if (el.id_matcher == logedId && el.id_matched != logedId) {
                if (matchId.indexOf(el.id_matched) == -1) {
                    matchId.push(el.id_matched)
                }
            }

        });

        const filterUsers = state.users.data.filter((value) => matchId.indexOf(value.id) == -1)
        data = filterUsers.filter(value => value.id != state.login.logedId).sort((a, b) => a.id > b.id ? -1 : 0)
    }
    return {
        users: data,
        logedId: state.login.logedId,
    }
}