import {
    SET_AUTH
  } from "../action/ActionType";
  
  export function setAuth(data) {
    return {
      type: SET_AUTH,
      payload: data,
    };
  }
  