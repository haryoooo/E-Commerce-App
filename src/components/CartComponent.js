import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCart, editCart, fetchCart} from "../store/action/CartAction";
import { Button, Table, Modal } from "react-bootstrap";
import { convertToRupiah } from "../urlConfig";

export default function CartComponent(props) {
  const total =  convertToRupiah((props.qty * props.price));
  const dispatch = useDispatch();
  const [qty, setQty] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function editTheCart() {
    handleShow();
  }

  function updateCart() {
    let condition;

    const data = {
      id: props.id,
      name: props.name,
      img: props.img,
      stock: props.stock,
      price: props.price,
      qty,
    };

    do {
      if (qty <= 0) {
        condition = true;
        alert("Input dengan angka lebih dari nol");
        return;
      } else if (qty > props.stock) {
        condition = true;
        alert("Input jangan melebihi stock!");
        return;
      } else {
        condition = false;
        dispatch(editCart(data));
        handleClose();
        alert("Data has been change");
      }
    } while (condition);
  }

  function deleteTheCart(id) {
    dispatch(deleteCart(id));
  }

  return (
    <div className="Cart">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>
              <img style={{ width: 150 }} src={props.img} />
            </td>
            <td>{props.qty}</td>
            <td>{convertToRupiah(props.price)}</td>
            <td>{total}</td>
            <td>
              <Button variant="success" onClick={() => editTheCart()}>
                Edit
              </Button>
              {"   "}
              <Button variant="danger" onClick={() => deleteTheCart(props.id)}>
                Delete
              </Button>
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
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>Masukkan jumlah Qty yang akan di input :</Modal.Body>
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
          <Button variant="primary" onClick={updateCart}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
