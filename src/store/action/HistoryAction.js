import axios from "axios";
import { url } from "../../urlConfig";
import {
  LOADING_HISTORY,
  LOAD_HISTORY,
  DELETE_HISTORY,
} from "../action/ActionType";

export function loadHistory(data) {
  return {
    type: LOAD_HISTORY,
    payload: data,
  };
}

export function loadingHistory(data) {
  return {
    type: LOADING_HISTORY,
    payload: data,
  };
}

export function deleteHistory(data) {
  return {
    type: DELETE_HISTORY,
    payload: data,
  };
}

export function fetchHistory() {
  return (dispatch) => {
    loadingHistory(true);
    axios
      .get(`${url}/histories`)
      .then((res) => {
        loadingHistory(false);
        dispatch(loadHistory(res.data));
      })

      .catch((err) => {
        alert(err);
      });
  };
}

export function removeHistory(id) {
  return (dispatch) => {
    axios
      .delete(`${url}/histories/${id}`)
      .then((res) => {
        dispatch(deleteHistory(id));
      })

      .catch((err) => {
        alert(err);
      });
  };
}
