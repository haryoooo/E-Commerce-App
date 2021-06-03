import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistory, removeHistory } from "../store/action/HistoryAction";
import { convertToRupiah } from "../urlConfig";
import { Button, Table } from "react-bootstrap";

export default function Histories() {
  const { histories, isLoading } = useSelector((state) => state.HistoryReducer);
  const dispatch = useDispatch();

  function deleteHistories(id) {
    dispatch(removeHistory(id))
  }

  useEffect(() => {
    dispatch(fetchHistory());
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
        <h3>Histories Page</h3>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Product</th>
                <th>Total Qty</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((product) => {
                return (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.transactionID}</td>
                    <td>{product.date}</td>
                    <td>
                      {product.carts.map((data) => {
                        return (
                          <ul>
                            <li>Product Name : {data.name}</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td>{product.carts.map(value=>{
                      return (
                        <p>{value.qty}</p>
                      )
                    })}</td>
                    <td>{product.carts.map(value=>{
                      return (
                        <p>{convertToRupiah(value.qty * value.price)}</p>
                      )
                    })}</td>
                    <td>
                      <Button variant="danger" onClick={() => deleteHistories(product.id)}>Delete</Button>
                      </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
    );
  }
}
