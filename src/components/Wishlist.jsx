/* eslint-disable react/prop-types */
import WishlistCard from "./WishlistCard";

export default function Wishlist({ wishlist, updateWishlist, clearWishlist }) {
  //map the cart array into cards
  let wishlistMap = wishlist.map((item) => {
    return <WishlistCard key={item.id} data={item} />;
  });
  return (
    wishlist && (
      <div className="wishlist--container">
        <div className="cart--buttons">
          <button className="cart--clear" onClick={() => clearWishlist()}>
            Clear Cart
          </button>
          <button className="cart--buy">Proceed to buy</button>
        </div>
        <div className="cart--card__container">{wishlistMap}</div>
      </div>
    )
  );
}
