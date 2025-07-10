import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../Context";
import Grid from '@mui/material/Grid';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="products" style={{ padding: '48px 0 64px 0', background: '#f8fafc', minHeight: '100vh', animation: 'fadeIn 1.2s' }}>
          <div style={{ maxWidth: 1300, margin: '0 auto' }}>
            <Title name="Our" title="Products" />
            <Grid container spacing={4} justifyContent="center">
              <ProductConsumer>
                {(value) => {
                  const filteredProducts = value.products.filter((product) =>
                    product.title
                      .toLowerCase()
                      .includes(value.searchQuery.toLowerCase())
                  );
                  return filteredProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <Product product={product} />
                    </Grid>
                  ));
                }}
              </ProductConsumer>
            </Grid>
          </div>
        </div>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: none; }
          }
        `}</style>
      </React.Fragment>
    );
  }
}
