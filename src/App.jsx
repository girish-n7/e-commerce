import { useState } from "react";
import Header from "./components/Header";
import SwitchPage from "./components/SwitchPage";
import Footer from "./components/Footer";

export default function App() {
  //cart and wishlist states
  let [cart, setCart] = useState([]);

  let [wishlist, setWishlist] = useState([]);

  //handle state change for cart and wishlist
  function updateCart(item) {
    setCart((prevState) => [...prevState, item]);
  }

  function clearCart() {
    setCart([]);
  }

  function updateWishlist(item) {
    setWishlist((prevState) => [...prevState, item]);
  }

  function clearWishlist() {
    setWishlist([]);
  }

  //create an array containing card contents
  let categoryContent = [
    { name: "MEN'S CLOTHING", img: "", category: "men's clothing" },
    { name: "WOMEN'S CLOTHING", img: "", category: "women's clothing" },
    { name: "ELECTRONICS", img: "", category: "electronics" },
    { name: "JEWELLERY", img: "", category: "jewelery" },
  ];

  return (
    <div>
      <Header cart={cart.length} wishlist={wishlist.length} />
      <SwitchPage
        categoryContent={categoryContent}
        cart={cart}
        wishlist={wishlist}
        updateCart={updateCart}
        clearCart={clearCart}
        updateWishlist={updateWishlist}
        clearWishlist={clearWishlist}
      />
      <Footer categoryContent={categoryContent} />
    </div>
  );
}
