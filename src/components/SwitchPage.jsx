import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Error from "./Error";

export default function SwitchPage() {
  return (
    <Routes key={location.pathname}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/productlist" element={<ProductList />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="*" element={<Error />} />
    </Routes>
  );
}
