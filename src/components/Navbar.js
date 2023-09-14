import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../img_5.png";
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="not found" className="logo" />
        </Link>
        <div className="prod">
          <Link to="/">
            <p>Product</p>
          </Link>
        </div>
        <div className="cartBox ">
          <Link to="/cart">
            <button className="btn">
              <span className="icon">
                <i class="fa fa-cart-plus" aria-hidden="true"></i>
              </span>
              Cart
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}
