/* eslint-disable react/prop-types */

export default function CartCard({ data }) {
  return (
    <div className="cart--card">
      <div className="cart--img">{data.image}</div>
      <div className="cart--head">
        <p className="cart--title">{data.title}</p>
        <p className="cart--price">{data.price}</p>
        <div className="cart--body">
          <p className="cart--quantity">1</p>
          <button className="cart--remove">Remove from cart</button>
        </div>
      </div>
    </div>
  );
}
