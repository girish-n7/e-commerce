/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import starIcon from "../assets/star.svg";
import heart from "../assets/heart.svg";
import heartRed from "../assets/heartRed.svg";

export default function ProductCard({ data, updateWishlist, inWishlist }) {
  let [wishlistItem, setWishlistItem] = useState(false);

  let navigate = useNavigate();
  let colorArr = [
    "invert(62%) sepia(79%) saturate(428%) hue-rotate(60deg) brightness(102%) contrast(98%)",
    "invert(84%) sepia(44%) saturate(701%) hue-rotate(17deg) brightness(93%) contrast(95%)",
    "invert(100%) sepia(60%) saturate(4426%) hue-rotate(325deg) brightness(106%) contrast(102%)",
    "invert(75%) sepia(93%) saturate(1448%) hue-rotate(330deg) brightness(102%) contrast(101%)",
    "invert(38%) sepia(63%) saturate(1764%) hue-rotate(335deg) brightness(103%) contrast(103%)",
  ];

  let starColor =
    data.rating.rate < 1
      ? colorArr[4]
      : data.rating.rate < 2
      ? colorArr[3]
      : data.rating.rate < 3
      ? colorArr[2]
      : data.rating.rate < 4
      ? colorArr[1]
      : colorArr[0];

  return (
    <div
      className="product--card"
      onClick={() => navigate(`/productPage/${data.id}`)}
    >
      <div
        className="product--img__card"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <img
          src={wishlistItem || inWishlist ? heartRed : heart}
          className="icon heart"
          alt=""
          onClick={(e) => {
            e.stopPropagation(); // to stop the click triggering background img click
            updateWishlist(data);
            setWishlistItem((prevState) => !prevState);
          }}
        ></img>
        <div className="product--rating__card">
          <p className="product--rate__card">
            {data.rating.rate}
            <img
              src={starIcon}
              className="product--star__card"
              alt=""
              style={{ filter: `${starColor}` }}
            />
          </p>

          <p className="product--ratingCount__card">{data.rating.count}</p>
        </div>
      </div>
      <div className="product--head">
        <p className="product--title__card">{data.title}</p>
        <p className="product--price__card">${data.price}</p>
      </div>
    </div>
  );
}
