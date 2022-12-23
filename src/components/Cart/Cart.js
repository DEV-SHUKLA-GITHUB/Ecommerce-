import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleAddProduct, handleRemoveProduct }) => {
  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  const cartList = cart.map((item) => {
    return (
      <div className="cart-product-item" key={item.id}>
        <img className="cart-product-image" src={item.url} alt="" srcset="" />
        <h3 className="cart-product-name">{item.name}</h3>
        <h3 className="price">Rs {item.price}</h3>
        <button
          className="small-button-remove"
          onClick={() => handleRemoveProduct(item)}
        >
          -
        </button>
        <h3>{item.quantity}</h3>
        <button
          className="small-button-add"
          onClick={() => handleAddProduct(item)}
        >
          +
        </button>
      </div>
    );
  });
  return (
    <>
      <div className="cart-product-items">{cartList}</div>
      <div className="total-price">Subtotal ₹{totalPrice}</div>
    </>
  );
};

export default Cart;
