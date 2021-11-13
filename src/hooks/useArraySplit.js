export default (array, nbr = 3) => {

    const data = []

    // recupere la taille
    // [1, 2, 3, 4, 5] = 5
    let length = array.length
    //on boucle pour extraire un tableau de taille 3
    // en soustrant la taille par 3
    //si la taille est negatif on return -1 pour dire qu'on ne peut plus extraire
    // [1,2,3] = 5-3 => 2
    // [4,5] = 2-3 => est negatif donc on peut pas straire de nouveau
    // et on return le composer suivant
    //[[1,2,3],[4,5]] => resultat final

    let n = 2


    while (length > 0) {

        let d = array.splice(0, nbr)
        data.push(d)

        if (length < 0) {
            data.push(array)
        }

        length = length - nbr
    }
    return data
}