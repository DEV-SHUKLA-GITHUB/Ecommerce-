import React from "react";

import { Link } from "react-router-dom";
import "./Store.css";
const Store = ({ product, addToCart, productHandler }) => {
  const productList = product.map((item) => {
    return (
      <div className="product-item" key={item.id}>
        <Link to={`/product/${item.id}`}>
          <img
            className="product-image"
            src={item.url}
            alt=""
            onClick={() => {
              productHandler(item);
            }}
          />
        </Link>

        <h3>{item.name}</h3>
        <h4>{item.price}</h4>
        <button
          className="cart-button"
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  });
  return <div className="product-items">{productList}</div>;
};

export default Store;
