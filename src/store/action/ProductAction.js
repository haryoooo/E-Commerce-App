import {
    LOADING_PRODUCTS,
    LOAD_PRODUCTS,
  } from "../action/ActionType";
import axios from 'axios'
import {url} from '../../urlConfig'
  
  
  export function loadProducts(data) {
    return {
      type: LOAD_PRODUCTS,
      payload: data,
    };
  }
  
  export function loadingProducts(data) {
    return {
      type: LOADING_PRODUCTS,
      payload: data,
    };
  }

export function fetchProducts(){
  return (dispatch) => {
    dispatch(loadingProducts(true))
    
    axios.get(`${url}/products`)
    .then(res=>{
      dispatch(loadingProducts(false))
      dispatch(loadProducts(res.data))
    })

    .catch(err=>{
      console.log(err)
    })

  }
}
  
  