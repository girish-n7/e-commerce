import { useState } from "react";
import Header from "./components/Header";
import SwitchPage from "./components/SwitchPage";
import Footer from "./components/Footer";

export default function App() {
  //cart and wishlist states
  let [cart, setCart] = useState([]);

  let [wishlist, setWishlist] = useState([]);

  //create an array containing card contents
  let categoryContent = [
    {
      name: "MEN'S CLOTHING",
      img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      category: "men's clothing",
    },
    {
      name: "WOMEN'S CLOTHING",
      img: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      category: "women's clothing",
    },
    {
      name: "ELECTRONICS",
      img: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      category: "electronics",
    },
    {
      name: "JEWELLERY",
      img: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      category: "jewelery",
    },
  ];

  //handle state change for cart and wishlist
  function updateCart(item) {
    setCart((prevState) => [...prevState, item]);
  }

  function deleteFromCart(deleteId) {
    let newCart = cart.filter((obj) => obj.id !== deleteId); //to delete obj in arr based on object id
    setCart(newCart);
  }

  function clearCart() {
    setCart([]); //empty cart
  }

  function moveAll(item) {
    setCart((prevState) => [...prevState, ...item]); //move all from wishlist to cart
  }

  function updateWishlist(item) {
    setWishlist((prevState) => [...prevState, item]); //add item to wishlist
  }

  function deleteFromWishlist(deleteId) {
    let newWishlist = wishlist.filter((obj) => obj.id !== deleteId); //to delete obj in arr based on object id
    setWishlist(newWishlist);
  }

  function clearWishlist() {
    setWishlist([]); //empty wishlist
  }

  return (
    <div>
      <Header cart={cart.length} wishlist={wishlist.length} />
      <SwitchPage
        categoryContent={categoryContent}
        cart={cart}
        wishlist={wishlist}
        updateCart={updateCart}
        clearCart={clearCart}
        moveAll={moveAll}
        updateWishlist={updateWishlist}
        clearWishlist={clearWishlist}
        deleteFromCart={deleteFromCart}
        deleteFromWishlist={deleteFromWishlist}
      />
      <Footer categoryContent={categoryContent} />
    </div>
  );
}
