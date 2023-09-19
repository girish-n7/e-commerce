/* eslint-disable react/prop-types */

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductPage from "./ProductPage";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import Error from "./Error";

export default function SwitchPage({
  categoryContent,
  cart,
  wishlist,
  updateCart,
  clearCart,
  updateWishlist,
  clearWishlist,
}) {
  return (
    <Routes key={location.pathname}>
      <Route
        exact
        path="/"
        element={<Home categoryContent={categoryContent} />}
      />
      <Route exact path="/products/:category" element={<Products />} />
      <Route
        exact
        path="/productPage/:id"
        element={
          <ProductPage
            updateCart={updateCart}
            updateWishlist={updateWishlist}
          />
        }
      />
      <Route
        exact
        path="/wishlist"
        element={
          <Wishlist
            wishlist={wishlist}
            updateWishlist={updateWishlist}
            clearWishlist={clearWishlist}
          />
        }
      />
      <Route
        exact
        path="/cart"
        element={
          <Cart cart={cart} updateCart={updateCart} clearCart={clearCart} />
        }
      />
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
}
