import { login } from "../../firebase";

//1.- Constants
export const TYPING_CREDENTIALS = "TYPING_CREDENTIALS";
export const SET_USER_DATA_SUCCESS = "SET_USER_DATA_SUCCESS";

//2.-Actions
function typingCredentialsSuccess(credentials) {
  //esto devuelve un action
  return {
    type: TYPING_CREDENTIALS,
    credentials
  };
}

//3.-Actions creators thunks
function setUserDataSuccess(user) {
  return {
    type: SET_USER_DATA_SUCCESS,
    user
  };
}

export let typingCredentials = credentials => dispatch => {
  //supongamos que aqui consumimos una api y todo sale bien
  return dispatch(typingCredentialsSuccess(credentials));
};

export let setUserData = (email, password) => dispatch => {
  login(email, password).then(user => dispatch(setUserDataSuccess(user)));
};
