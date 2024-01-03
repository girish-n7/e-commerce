/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import checkout from "../assets/checkout.svg";
import clear from "../assets/clear.svg";

export default function Cart({
  cart,
  clearCart,
  deleteFromCart,
  updateWishlist,
}) {
  let navigate = useNavigate(); //to switch to respective page on click

  //map the cart array into cards
  let cartMap = cart.map((item) => {
    return (
      <CartCard
        key={item.id}
        data={item}
        deleteFromCart={deleteFromCart}
        updateWishlist={updateWishlist}
      />
    );
  });

  return cart.length > 0 ? (
    <div className="cart--container">
      <div className="cart--buttons">
        <button className="cart--buy" onClick={() => navigate("/checkout")}>
          <img src={checkout} alt="" className="checkout--img"></img>
          Checkout
        </button>
        <button className="cart--clear" onClick={() => clearCart()}>
          <img src={clear} alt="" className="clear--img"></img>Clear Cart
        </button>
      </div>
      <div className="cart--card__container">{cartMap}</div>
    </div>
  ) : (
    <div className="cart--container">
      <p className="cart--empty">Your cart is empty!</p>
      <p className="cart--shop" onClick={() => navigate("/")}>
        Start shopping
      </p>
    </div>
  );
}
