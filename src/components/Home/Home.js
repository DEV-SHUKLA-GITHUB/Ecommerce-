import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Store from "../Store/Store";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to shopme</h1>
      <NavLink to="/store">
        <button className="btn">Start Shopping</button>
      </NavLink>
      {/* <Navbar />
      <Store
      product={product}
      addToCart={addToCart}
      productHandler={productHandler}
      /> */}
    </div>
    // <div>Hello</div>
  );
};

export default Home;
