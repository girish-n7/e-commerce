/* eslint-disable react/prop-types */

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductPage from "./ProductPage";
import Cart from "./Cart";
import Error from "./Error";

export default function SwitchPage({ categoryContent }) {
  return (
    <Routes key={location.pathname}>
      <Route
        exact
        path="/"
        element={<Home categoryContent={categoryContent} />}
      />
      <Route exact path="/products/:category" element={<Products />} />
      <Route exact path="/productPage/:data" element={<ProductPage />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
}
