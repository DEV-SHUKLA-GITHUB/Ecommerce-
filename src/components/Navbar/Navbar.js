import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">
      <ul className="nav-items">
        <li>
          <NavLink to="/">
            <p className="nav-item">Shopme</p>
          </NavLink>
        </li>
        <div className="store-cart">
          <li>
            <NavLink to="/store">
              <p className="nav-item">Store</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <FaShoppingCart size={28} className="cartIcon nav-item" />
            </NavLink>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Navbar;
