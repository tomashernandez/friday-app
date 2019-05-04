import { combineReducers } from "redux";

import {
  TYPING_CREDENTIALS,
  SET_USER_DATA_SUCCESS
} from "../actions/userActions";

function data(state = {}, action) {
  switch (action.type) {
    case TYPING_CREDENTIALS:
      return action.credentials;
    case SET_USER_DATA_SUCCESS:
      return action.user;
    default:
      return state;
  }
}

function array(state = [], action) {
  switch (action.type) {
    case "ADD_USER":
      return [state, action.user];

    default:
      return state;
  }
}

function object(state = {}, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({ array, object, data });
