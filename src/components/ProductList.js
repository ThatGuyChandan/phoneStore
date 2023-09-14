import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";
export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="outerContainer">
          <div className="container">
            <Title name="Our" title="Products" />

            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product Key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
