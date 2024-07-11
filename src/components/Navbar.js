import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { ProductConsumer } from "../Context";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="prod">
          <Link to="/">
            <p>Product</p>
          </Link>
        </div>
        <div className="srchbar">
          <ProductConsumer>
            {(value) => <Search onSearch={value.setSearchQuery} />}
          </ProductConsumer>
        </div>
        <div className="cartBox">
          <Link to="/cart">
            <button className="btn">
              <span className="icon">
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
              </span>
              Cart
            </button>
          </Link>
        </div>
      </nav>
    );
  }
}
