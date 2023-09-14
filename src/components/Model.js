import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
export default class Model extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModel } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="container3">
                <div>
                  <div className="model">
                    <h5>Added to cart</h5>
                    <img src={img} alt="phone img" />
                    <h5>{title}</h5>
                    <h5>price:${price}</h5>
                    <Link to="/">
                      <button className="btn1" onClick={() => closeModel()}>
                        store
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button className="btn1" onClick={() => closeModel()}>
                        cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
