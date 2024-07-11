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
                  const filteredProducts = value.products.filter((product) =>
                    product.title
                      .toLowerCase()
                      .includes(value.searchQuery.toLowerCase())
                  );
                  return filteredProducts.map((product) => {
                    return <Product key={product.id} product={product} />;
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
