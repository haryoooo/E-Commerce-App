import {
  LOAD_CARTS,
  LOADING_CARTS,
  ADD_CARTS,
  DELETE_CARTS,
  DELETE_ALL_CARTS,
  EDIT_CARTS,
} from "../action/ActionType";
import axios from 'axios'
import { url } from "../../urlConfig";

export function loadCarts(data) {
  return {
    type: LOAD_CARTS,
    payload: data,
  };
}

export function loadingCarts(data) {
  return {
    type: LOADING_CARTS,
    payload: data,
  };
}

export function addCarts(data) {
  return {
    type: ADD_CARTS,
    payload: data,
  };
}

export function deleteAllCarts() {
  return {
    type: DELETE_ALL_CARTS,
    payload: [],
  };
}

export function deleteCarts(data) {
  return {
    type: DELETE_CARTS,
    payload: data,
  };
}

export function editCarts(data) {
  return {
    type: EDIT_CARTS,
    payload: data,
  };
}

export function fetchCart() {
  return (dispatch) => {
    dispatch(loadingCarts(true))

    axios.get(`${url}/carts`).then((res) => {
      dispatch(loadingCarts(false))
      dispatch(loadCarts(res.data));
    });
  };
}


export function addingToCart(data) {
  return (dispatch) => {
    axios.post(`${url}/carts`, data).then((res) => {
      dispatch(addCarts(res.data));
    });
  };
}

export function editCart(data) {
  return (dispatch) => {
    axios.put(`${url}/carts/${data.id}`, data).then((res) => {
      dispatch(editCarts(res.data));
    });
  };
}

export function deleteCart(id) {
  return (dispatch) => {
    axios.delete(`${url}/carts/${id}`).then((res) => {
      dispatch(deleteCarts(id));
    });
  };
}
