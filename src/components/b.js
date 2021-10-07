//  constructor(props) {
//         super(props)

//         this.state = {
//             email: '',
//             password: '',
//             signInTranslate: new Animated.Value(0),
//             signUpTranslate: new Animated.Value(-SCREEN_WIDTH)
//         }

//         this.times = null

//         this.onSignIn = this.onSignIn.bind(this)
//         this.signUpForm = this.signUpForm.bind(this)
//         this.signInForm = this.signInForm.bind(this)
//     }

//     /** Call animation to translate signInform */
//     signInForm = () => {
//         const { signInTranslate, signUpTranslate } = this.state
//         Animated.stagger(250, [
//             Animated.spring(signUpTranslate, {
//                 toValue: -SCREEN_WIDTH,
//                 useNativeDriver: false
//             }),
//             Animated.spring(signInTranslate, {
//                 toValue: 0,
//                 useNativeDriver: false
//             })
//         ]).start()
//     }


//     /** Call animation to translate signUpform */
//     signUpForm = () => {
//         const { signInTranslate, signUpTranslate } = this.state
//         Animated.stagger(250, [
//             Animated.spring(signInTranslate, {
//                 toValue: SCREEN_WIDTH,
//                 useNativeDriver: false
//             }),
//             Animated.spring(signUpTranslate, {
//                 toValue: 0,
//                 useNativeDriver: false
//             })
//         ]).start()
//     }

//     /** call signIn func of AuthContext */
//     onSignIn = (email, password) => {
//         const { signIn } = this.context
//         signIn(email, password)
//     }

//     /** call signUp func of AuthContext */
//     onSignUp = (data) => {
//         console.log(isEmpty(data.nom))
//         const { signUp, error } = this.context
//         error.setError('')
//         if (isEmpty(data.preom)
//             || isEmpty(data.nom)
//             || isEmpty(data.password)
//             || isEmpty(data.email)
//             || isEmpty(data.confPassword)) {
//             console.log('jj')
//             error.setError("L'un des champs est vide")
//             return
//         }
//         if (!isEmail(data.email)) {
//             error.setError("L'email n'est pas valide")
//             return
//         }
//         if (data.password.length < 3) {
//             error.setError("La taille minimun du mot de passe est 8")
//             return
//         }
//         if (data.password != data.confPassword) {
//             error.setError("Les deux mots de pass sont different")
//             return
//         }
//         // delete data.confPassword
//         // signUp(data)
//     }

//     componentDidUpdate() {
//         const { error } = this.context
//         if (isEmpty(error.getError) == false) {
//             this.times = setTimeout(() => {
//                 error.setError('')
//             }, 5000)
//         }
//     }

//     componentWillUnmount() {
//         clearTimeout(this.times)
//     }

//     render() {
//         return (
//             <View style={STYLE.container} >
//                 <AuthContext.Consumer>
//                     {({ error }) => (
//                         <>
//                             {!isEmpty(error.getError) && (<ErrorHandler error={error} />)}
//                             <Animated.View style={[
//                                 STYLE.signContainer,
//                                 {
//                                     transform: [{ translateX: this.state.signInTranslate }]
//                                 }
//                             ]}>
//                                 <SignInForm
//                                     handlerSubmit={this.onSignIn}
//                                     handlerSignUp={this.signUpForm}
//                                     error={error}
//                                 />
//                             </Animated.View>
//                             <Animated.View style={[
//                                 STYLE.signContainer,
//                                 {
//                                     transform: [{ translateX: this.state.signUpTranslate }]
//                                 }
//                             ]}>
//                                 <SignUpForm
//                                     handler={this.onSignUp}
//                                     signInHandler={this.signInForm}
//                                     error={error}
//                                 />
//                                 <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>

//                                 </View>
//                             </Animated.View>
//                         </>
//                     )}
//                 </AuthContext.Consumer>
//             </View >
//         )
//     }