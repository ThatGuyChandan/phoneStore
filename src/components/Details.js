import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, company, img, info, price, title, inCart } =
            value.detailProduct;

          return (
            <div className="container2">
              <div className="row2">
                <div className="title">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="content">
                <div className="imgCont">
                  <img src={img} className="ima" alt="some" />
                </div>
                <div className="detail">
                  <h3>Model:{title}</h3>
                  <h5>
                    Made By:<span>{company}</span>
                  </h5>
                  <h5>
                    Price:<span>$</span>
                    {price}
                  </h5>
                  <p>Info:</p>
                  <p>{info}</p>
                  <div className="btnCont">
                    <Link to="/">
                      <button className="btn1">Back to product</button>
                    </Link>
                    <button
                      className="btn1"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
