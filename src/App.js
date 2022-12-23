import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";
import Card from "./components/Card/Card";
import productItems from "./product list/products";
import EmptyCart from "./components/EmptyCart/EmptyCart";

const App = () => {
  const [product, setProduct] = useState(productItems);
  const [cartItems, setCartItems] = useState([]);
  const [productCard, setproductCard] = useState();
  const addToCart=(product)=> {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  function productHandler(item) {
    setproductCard(item);
  }
  function handleRemoveProduct(product) {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? {
                ...ProductExist,
                quantity: ProductExist.quantity - 1,
              }
            : item
        )
      );
    }
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/store"
            element={
              <Store
                product={product}
                addToCart={addToCart}
                productHandler={productHandler}
              />
            }
          ></Route>
          <Route
            path="/product/:ID"
            element={<Card productCard={productCard} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              cartItems.length > 0 ? (
                <Cart
                  cart={cartItems}
                  handleAddProduct={addToCart}
                  handleRemoveProduct={handleRemoveProduct}
                />
              ) : (
                <EmptyCart />
              )
            }
          />
          {/* <Route
            path="/card"
            element={
              <CardDetails cardDisplay={cardDetails} addToCart={addToCart} />
            }
          /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
