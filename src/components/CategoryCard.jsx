/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ name, img, route }) {
  const navigate = useNavigate(); //to switch to respective page on click

  return (
    <div
      className="category--card"
      style={{ backgroundImage: `url(${img})` }}
      onClick={() => navigate(route)}
    >
      <div className="category--card__content">{name}</div>
    </div>
  );
}
