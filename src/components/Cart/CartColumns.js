import React, { Component } from "react";

export default class CartColumns extends Component {
  render() {
    return (
      <div className="container4">
        <div className="row4">
          <p>Products</p>
        </div>
        <div className="row4">
          <p>Name of product</p>
        </div>
        <div className="row4">
          <p>Price</p>
        </div>
        <div className="row4">
          <p>Quantity</p>
        </div>
        <div className="row4">
          <p>Remove</p>
        </div>
        <div className="row4">
          <p>Total</p>
        </div>
      </div>
    );
  }
}
