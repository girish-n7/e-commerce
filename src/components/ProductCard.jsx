/* eslint-disable react/prop-types */

export default function ProductCard({ title, img, price }) {
  return (
    <div className="product--card">
      <div
        className="product--img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="product--head">
        <p className="product--title">{title}</p>
        <p className="product--price">${price}</p>
      </div>
    </div>
  );
}
