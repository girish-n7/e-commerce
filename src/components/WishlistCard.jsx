/* eslint-disable react/prop-types */
import bin from "../assets/bin.svg";

export default function WishlistCard({ data, updateCart, deleteFromWishlist }) {
  return (
    <div className="wishlist--card">
      <div className="wishlist--img">{data.image}</div>
      <div className="wishlist--head">
        <p className="wishlist--title">{data.title}</p>
        <p className="wishlist--price">{data.price}</p>
        <div className="wishlist--body">
          <p className="wishlist--quantity">1</p>
          <button className="cart--remove">
            <img
              src={bin}
              alt="remove"
              className="icon remove"
              onClick={() => deleteFromWishlist(data.id)}
            ></img>
          </button>
          <button className="cart--remove">
            <img
              src={bin}
              alt="move to cart"
              className="icon move"
              onClick={() => {
                updateCart(data);
                deleteFromWishlist(data.id);
              }}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
}

//reuse styles form cart
