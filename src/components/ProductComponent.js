import React, { useState } from "react";
import { Button, Table, Modal} from "react-bootstrap";
import {useDispatch} from 'react-redux'
import { addCarts, addingToCart } from "../store/action/CartAction";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import { convertToRupiah, url } from "../urlConfig";

export default function ProductComponent(props) {
  const dispatch = useDispatch()
  const [qty, setQty] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function addProduct() {
    
    let condition;

    const data = {
      name: props.name,
      img: props.img,
      stock: props.stock,
      price: props.price,
      qty
    }


    do {
      if (qty <= 0) {
        condition = true;
        alert("Input dengan angka lebih dari nol");
        return
      } else if (qty > props.stock) {
        condition = true;
        alert("Input jangan melebihi stock!");
        return
      } else {
        condition = false;
        dispatch(addCarts(data))
        axios.post(`${url}/carts`, data)
        alert("Data added to Carts")
        handleClose()
      }
    } while (condition);
  }

  return (
    <div className="ProductComponent">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Date</th>
            <th>Name</th>
            <th>SN</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
              <img style={{ width: 150 }} src={props.img} />
            </td>
            <td>{convertToRupiah(props.price)}</td>
            <td>{props.stock}</td>
            <td>
              <Button onClick={handleShow}>Add To Cart</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Product into Carts</Modal.Title>
        </Modal.Header>
        <Modal.Body>Masukkan jumlah stok yang akan di input :</Modal.Body>
        <input
          type="number"
          placeholder="Masukkan Qty"
          min="0"
          onChange={(e) => setQty(Number(e.target.value))}
          value={qty}
        />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
