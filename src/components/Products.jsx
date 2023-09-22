/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "./CallBackend";

export default function Products({ defaultContent }) {
  let { category } = useParams();

  let [data, setData] = useState(defaultContent);

  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, [category]);

  let productMap = data.map((item) => {
    return (
      <ProductCard
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        img={item.image}
        rating={item.rating}
      />
    );
  });

  return <div className="products--container">{productMap}</div>;
}
