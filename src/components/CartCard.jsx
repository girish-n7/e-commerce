/* eslint-disable react/prop-types */

export default function CartCard({ data }) {
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
          <button className="cart--remove">
            <img src="" alt="remove" className="icon remove"></img>
          </button>
        </div>
      </div>
    </div>
  );
}
