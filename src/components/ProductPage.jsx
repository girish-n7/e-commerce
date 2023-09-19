/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "./CallBackend";
import starIcon from "../assets/star.svg";

export default function ProductPage({ updateCart, updateWishlist }) {
  let { id } = useParams();

  let navigate = useNavigate();

  let [data, setData] = useState(null);

  let colorArr = [
    "invert(62%) sepia(79%) saturate(428%) hue-rotate(60deg) brightness(102%) contrast(98%)",
    "invert(84%) sepia(44%) saturate(701%) hue-rotate(17deg) brightness(93%) contrast(95%)",
    "invert(100%) sepia(60%) saturate(4426%) hue-rotate(325deg) brightness(106%) contrast(102%)",
    "invert(75%) sepia(93%) saturate(1448%) hue-rotate(330deg) brightness(102%) contrast(101%)",
    "invert(38%) sepia(63%) saturate(1764%) hue-rotate(335deg) brightness(103%) contrast(103%)",
  ];

  useEffect(() => {
    getProduct(id)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    data && (
      <div className="product--container">
        <div
          className="product--img"
          style={{ backgroundImage: `url(${data.image})` }}
        >
          <button
            onClick={() => navigate(-1)}
            className="product--back"
            title="Go to previous page"
          >
            Go Back
          </button>
        </div>
        <div className="product--body">
          <p className="product--title">{data.title}</p>
          <div className="product--rating">
            <p className="product--rate">{data.rating.rate}</p>
            <img
              src={starIcon}
              className="product--star"
              alt=""
              style={{ filter: `${colorArr[Math.floor(data.rating.rate)]}` }}
            />
            <p className="product--rating__count">
              {data.rating.count} ratings
            </p>
          </div>
          <p className="product--desc">{data.description}</p>
          <p className="product--price">${data.price}</p>
          <div className="product--buy">
            <button
              className="btn buy--btn"
              title="Add item to cart"
              onClick={() => {
                updateCart(data);
                navigate("/cart");
              }}
            >
              BUY / ADD
            </button>
            <button
              className="btn wishlist--btn"
              title="Add item to wishlist"
              onClick={() => {
                updateWishlist(data);
                navigate("/wishlist");
              }}
            >
              WISHLIST
            </button>
          </div>
        </div>
      </div>
    )
  );
}
