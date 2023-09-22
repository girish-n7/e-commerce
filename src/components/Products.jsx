/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "./FetchFromBackend";
import { ProductCardPlaceholder } from "./Placeholder";

export default function Products() {
  let { category } = useParams();

  let [data, setData] = useState(null);

  //array for placeholder map
  let placeholder = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, [category]);

  let productMap = data
    ? data.map((item) => {
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
      })
    : placeholder.map((item) => {
        return <ProductCardPlaceholder key={item.id} />;
      });

  return <div className="products--container">{productMap}</div>;
}
