import "./App.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Default from "./components/Default";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Model from "./components/Model";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Model />
      {/* <ProductList />
      <Details />
      <Cart />
      <Default /> */}
    </React.Fragment>
  );
}

export default App;
