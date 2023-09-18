import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./CallBackend";
import starIcon from "../assets/star.svg";

export default function ProductPage() {
  let { id } = useParams();

  let [data, setData] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => console.error(err));
  }, [id]);

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
    data && (
      <div className="product--container">
        <div
          className="product--img"
          style={{ backgroundImage: `url(${data.image})` }}
        ></div>
        <div className="product--body">
          <p className="product--title">{data.title}</p>
          <div className="product--rating">
            <p className="product--rate">{data.rating.rate}</p>
            <img
              src={starIcon}
              className="product--star"
              alt=""
              style={{ filter: `${starColor}` }}
            />
            <p className="product--rating__count">
              {data.rating.count} ratings
            </p>
          </div>
          <p className="product--desc">{data.description}</p>
          <p className="product--price">${data.price}</p>
          <div className="product--buy">
            <button className="btn buy--btn">BUY NOW</button>
            <button className="btn wishlist--btn">WISHLIST</button>
          </div>
        </div>
      </div>
    )
  );
}
