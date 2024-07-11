import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Model from "./components/Model";
import { ProductProvider, ProductConsumer } from "./Context";

function App() {
  return (
    <ProductProvider>
      <React.Fragment>
        <ProductConsumer>
          {(value) => <Navbar onSearch={value.setSearchQuery} />}
        </ProductConsumer>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Default />} />
        </Routes>
        <Model />
      </React.Fragment>
    </ProductProvider>
  );
}

export default App;
