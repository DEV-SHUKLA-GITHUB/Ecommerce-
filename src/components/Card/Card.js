import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import productItems from "../../product list/products";
import "./Card.css";

const Card = ({ addToCart }) => {
  const [product, setproduct] = useState();
  const { ID } = useParams();
  useEffect(() => {
    setproduct(productItems.find((item) => item.id == ID));
  }, []);
  return (
    <div className="container">
      {product ? (
        <>
          <img className="img" src={product.url} alt="" />
          <h2>{product.name}</h2>
          <h2>Rs. {product.price}</h2>
          <p>{product.desc}</p>
          <button className="btn" onClick={() => addToCart(product)}>
            Add To Cart
          </button>
        </>
      ) : (
        <div>Hello</div>
      )}
    </div>
  );
};

export default Card;
