/* eslint-disable react/prop-types */
import bin from "../assets/bin.svg";
import move from "../assets/move.svg";

export default function WishlistCard({ data, updateCart, deleteFromWishlist }) {
  return (
    <div className="cart--card">
      <div
        className="cart--img"
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      <div className="cart--head">
        <p className="cart--title">{data.title}</p>
        <div className="cart--body">
          <p className="cart--price">${data.price}</p>
          <p className="cart--quantity">Quantity: 1</p>
          <img
            src={move}
            alt="move"
            title="move to cart"
            className="icon move"
            onClick={() => {
              updateCart(data);
              deleteFromWishlist(data.id);
            }}
          ></img>
          <img
            src={bin}
            alt="remove"
            title="delete item"
            className="icon remove"
            onClick={() => deleteFromWishlist(data.id)}
          ></img>
        </div>
      </div>
    </div>
  );
}

//reuse styles form cart
