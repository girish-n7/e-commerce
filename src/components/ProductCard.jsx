/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import starIcon from "../assets/star.svg";

export default function ProductCard({ id, title, img, price, rating }) {
  let navigate = useNavigate();
  let colorArr = [
    "invert(62%) sepia(79%) saturate(428%) hue-rotate(60deg) brightness(102%) contrast(98%)",
    "invert(84%) sepia(44%) saturate(701%) hue-rotate(17deg) brightness(93%) contrast(95%)",
    "invert(100%) sepia(60%) saturate(4426%) hue-rotate(325deg) brightness(106%) contrast(102%)",
    "invert(75%) sepia(93%) saturate(1448%) hue-rotate(330deg) brightness(102%) contrast(101%)",
    "invert(38%) sepia(63%) saturate(1764%) hue-rotate(335deg) brightness(103%) contrast(103%)",
  ];

  let starColor =
    rating.rate < 1
      ? colorArr[4]
      : rating.rate < 2
      ? colorArr[3]
      : rating.rate < 3
      ? colorArr[2]
      : rating.rate < 4
      ? colorArr[1]
      : colorArr[0];

  return (
    <div
      className="product--card"
      onClick={() => navigate(`/productPage/${id}`)}
    >
      <div
        className="product--img__card"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="product--rating__card">
          <p className="product--rate__card">
            {rating.rate}
            <img
              src={starIcon}
              className="product--star__card"
              alt=""
              style={{ filter: `${starColor}` }}
            />
          </p>

          <p className="product--ratingCount__card">{rating.count}</p>
        </div>
      </div>
      <div className="product--head">
        <p className="product--title__card">{title}</p>
        <p className="product--price__card">${price}</p>
      </div>
    </div>
  );
}
