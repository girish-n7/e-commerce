import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./CallBackend";

export default function ProductPage() {
  let { id } = useParams();

  let [data, setData] = useState(null);

  useEffect(() => {
    getProductById(id)
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
        ></div>
        <div className="product--body">
          <p className="product--title">{data.title}</p>
          <div className="product--rating">
            <p className="product--rate">{data.rating.rate}</p>
            <p className="product--rating__count">{data.rating.count}</p>
          </div>
          <p className="product--desc">{data.description}</p>
          <p className="product--price">${data.price}</p>
        </div>
      </div>
    )
  );
}
