import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "../components/ProductComponent";
import { fetchProducts } from "../store/action/ProductAction";

export default function ProductPage() {
  const { products, isLoading } = useSelector((state) => state.ProductReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return (
      <div style={{display: "flex", alignSelf: 'center', justifyContent: 'center', marginTop: 200}}>
        <h3>Loading....</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Product Page</h3>
        {products.map((value) => {
          return (
            <ProductComponent
              id={value.id}
              name={value.name}
              img={value.img}
              price={value.price}
              stock={value.stock}
            />
          );
        })}
      </div>
    );
  }
}
