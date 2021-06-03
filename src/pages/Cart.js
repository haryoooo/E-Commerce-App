import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartComponent from "../components/CartComponent";
import { deleteAllCarts, fetchCart } from "../store/action/CartAction";
import { Button } from "react-bootstrap";
import {url} from '../urlConfig'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Cart() {
  const history = useHistory()
  const dispatch = useDispatch();
  const { carts, isLoading } = useSelector((state) => state.CartReducer);

  function deleteAllTheCart() {
    const promiseAll = [];

    carts.forEach((value) => {
      promiseAll.push(axios.delete(`${url}/carts/${value.id}`));
    });

    Promise.all(promiseAll).then((res) => {
      dispatch(deleteAllCarts());
    });
    history.push("/");
  }

  function checkOut() {
    axios
      .post(`${url}/histories`, { carts, date: new Date(), transactionID: Date.now() })
      .then((res) => {
        deleteAllTheCart();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  if (isLoading) {
    return (
      <div style={{display: "flex", alignSelf: 'center', justifyContent: 'center', marginTop: 200}}>
        <h3>Loading...</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Cart Page</h3>
        {carts.map((value) => {
          return (
            <CartComponent
              id={value.id}
              name={value.name}
              img={value.img}
              price={value.price}
              stock={value.stock}
              qty={value.qty}
            />
          );
        })}
        <div style={{ textAlign: "center", padding: 20 }}>
          <Button onClick={() => checkOut()}>Check Out</Button>
        </div>
      </div>
    );
  }
}
