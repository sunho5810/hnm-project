let initState = {
    id: '',
    password: '',
    authenticate: false
}

function authenticateReducer(state = initState, action){
    let {type, payload} = action

    switch (type) {
        case "LOGIN_SUCCESS":
            console.log("login succes reducer");
            return {
                ...state,
                id: payload.id,
                password: payload.password,
                authenticate: true
            }

        case "LOGIN_FAILED":
            console.log("login failed reducer");
            return {
                ...state,
                authenticate: payload.authenticate
            }
        default:
            return {...state}
    }

}

export default authenticateReducer;