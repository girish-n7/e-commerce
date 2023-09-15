import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "./CallBackend";

export default function Products() {
  let { category } = useParams();

  let [data, setData] = useState(null);

  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, [category]);

  let productMap =
    data &&
    data.map((item) => {
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

  return data && <div className="products--container">{productMap}</div>;
}
