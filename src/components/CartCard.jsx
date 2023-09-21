/* eslint-disable react/prop-types */
import bin from "../assets/bin.svg";

export default function CartCard({ data, deleteFromCart }) {
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
            src={bin}
            alt="remove"
            className="icon remove"
            onClick={() => deleteFromCart(data.id)}
          ></img>
        </div>
      </div>
    </div>
  );
}
