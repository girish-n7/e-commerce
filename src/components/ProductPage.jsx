/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProduct } from "./FetchFromBackend";
import { ProductPlaceholder } from "./Placeholder";
import starIcon from "../assets/star.svg";

export default function ProductPage({
  wishlist,
  cart,
  updateCart,
  updateWishlist,
  deleteFromWishlist,
  deleteFromCart,
}) {
  let { id } = useParams(); //get user selected id from params

  let navigate = useNavigate(); //to switch to respective page on click

  let [data, setData] = useState(null);

  //create array to set the rating star according to rating
  let colorArr = [
    "invert(38%) sepia(63%) saturate(1764%) hue-rotate(335deg) brightness(103%) contrast(103%)",
    "invert(75%) sepia(93%) saturate(1448%) hue-rotate(330deg) brightness(102%) contrast(101%)",
    "invert(100%) sepia(60%) saturate(4426%) hue-rotate(325deg) brightness(106%) contrast(102%)",
    "invert(84%) sepia(44%) saturate(701%) hue-rotate(17deg) brightness(93%) contrast(95%)",
    "invert(62%) sepia(79%) saturate(428%) hue-rotate(60deg) brightness(102%) contrast(98%)",
  ];

  //fetch data from backend
  useEffect(() => {
    getProduct(id)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, [id]);

  return data ? (
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
          Back
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
          <p className="product--rating__count">{data.rating.count} ratings</p>
        </div>
        <p className="product--desc">{data.description}</p>
        <p className="product--price">${data.price}</p>
        <div className="product--buy">
          <button
            className="btn buy--btn"
            title="Add item to cart"
            onClick={() => {
              //check if selected item is in cart

              cart.some((item) => item.id === data.id)
                ? deleteFromCart(data.id)
                : updateCart(data);
            }}
          >
            {cart.some((item) => item.id === data.id)
              ? "Remove from cart"
              : "Buy/Add"}
          </button>
          <button
            className="btn wishlist--btn"
            title="Add item to wishlist"
            onClick={() => {
              //check if selected item is in wishlist

              wishlist.some((wish) => wish.id === data.id)
                ? deleteFromWishlist(data.id)
                : updateWishlist(data);
            }}
          >
            {wishlist.some((wish) => wish.id === data.id)
              ? "Remove from wishlist"
              : "Add to wishlist"}
          </button>
        </div>
      </div>
    </div>
  ) : (
    <ProductPlaceholder />
  );
}
