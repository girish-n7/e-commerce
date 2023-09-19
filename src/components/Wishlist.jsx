/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import WishlistCard from "./WishlistCard";

export default function Wishlist({ wishlist, wishlistToCart, clearWishlist }) {
  let navigate = useNavigate();

  //map the cart array into cards
  let wishlistMap = wishlist.map((item) => {
    return <WishlistCard key={item.id} data={item} />;
  });
  return (
    wishlist && (
      <div className="cart--container">
        <div className="cart--buttons">
          <button
            className="cart--buy"
            onClick={() => {
              wishlistToCart(wishlist);
              clearWishlist();
              navigate("/cart");
            }}
          >
            Move all to cart
          </button>
          <button className="cart--clear" onClick={() => clearWishlist()}>
            Clear all
          </button>
        </div>
        <div className="wishlist--card__container">{wishlistMap}</div>
      </div>
    )
  );
}

//reuse styles from cart
