function login (id, password){
    return (dispatch, getState) => {
        console.log("login succes action");
        dispatch({type: "LOGIN_SUCCESS", payload: {id, password}});
    }
} 

function checkAuthenticate (authenticate){
    return (dispatch, getState) => {
        console.log("login failed action");
        dispatch({type: "LOGIN_FAILED", payload: {authenticate}});
    }
}

export const authenticateAction = {login, checkAuthenticate};