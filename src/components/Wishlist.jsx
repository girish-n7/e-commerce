/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import WishlistCard from "./WishlistCard";
import checkout from "../assets/checkout.svg";
import clear from "../assets/clear.svg";

export default function Wishlist({
  wishlist,
  moveAll,
  updateCart,
  clearWishlist,
  deleteFromWishlist,
}) {
  let navigate = useNavigate();

  //map the cart array into cards
  let wishlistMap = wishlist.map((item) => {
    return (
      <WishlistCard
        key={item.id}
        data={item}
        updateCart={updateCart}
        deleteFromWishlist={deleteFromWishlist}
      />
    );
  });
  return wishlist.length > 0 ? (
    <div className="cart--container">
      <div className="cart--buttons">
        <button
          className="cart--buy"
          onClick={() => {
            moveAll(wishlist);
            clearWishlist();
            navigate("/cart");
          }}
        >
          <img src={checkout} alt="" className="checkout--img"></img>Move all to
          cart
        </button>
        <button className="cart--clear" onClick={() => clearWishlist()}>
          <img src={clear} alt="" className="clear--img"></img>Clear all
        </button>
      </div>
      <div className="wishlist--card__container">{wishlistMap}</div>
    </div>
  ) : (
    <div className="cart--container">
      <p className="cart--empty">Your wishlist is empty!</p>
      <p className="cart--shop" onClick={() => navigate("/")}>
        START SHOPPING
      </p>
    </div>
  );
}

//reuse styles from cart
