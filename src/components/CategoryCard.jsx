/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ name, img, category }) {
  const navigate = useNavigate(); //to switch to respective page on click

  return (
    <div
      className="category--card"
      style={{ backgroundImage: `url(${img})` }}
      onClick={() => navigate(`/products/${category}`)}
    >
      <div className="category--card__content">{name}</div>
    </div>
  );
}
