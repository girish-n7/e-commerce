/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function ProductCard({ id, title, img, price, rating }) {
  let navigate = useNavigate();

  return (
    <div
      className="product--card"
      onClick={() => navigate(`/productPage/${id}`)}
    >
      <div className="product--img" style={{ backgroundImage: `url(${img})` }}>
        <div className="product--rating">
          <p className="product--rate">{rating.rate}</p>
          <p className="product--rating__count">{rating.count}</p>
        </div>
      </div>
      <div className="product--head">
        <p className="product--title">{title}</p>
        <p className="product--price">${price}</p>
      </div>
    </div>
  );
}
