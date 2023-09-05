import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Error from "./Error";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products" element={<Products />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
}
