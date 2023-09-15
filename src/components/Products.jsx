import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "./CallBackend";

export default function Products() {
  let { category } = useParams();

  let { data, setData } = useState();

  getProductsByCategory(category).then((response) => setData(response.json()));

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
