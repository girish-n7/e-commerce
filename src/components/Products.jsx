/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { getProductsByCategory } from "./FetchFromBackend";
import { ProductCardPlaceholder } from "./Placeholder";

export default function Products({ updateWishlist, wishlist }) {
  let { category } = useParams(); //get category from params

  let [data, setData] = useState(null);

  //array for placeholder map
  let placeholder = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

  //fetch products by category
  useEffect(() => {
    getProductsByCategory(category)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((err) => console.error(err));
  }, [category]);

  //map the fetched data
  let productMap = data
    ? data.map((item) => {
        //check if item is in wishlist
        let inWishlist = wishlist.some((wish) => wish.id === item.id);

        return (
          <ProductCard
            key={item.id}
            data={item}
            updateWishlist={updateWishlist}
            inWishlist={inWishlist}
          />
        );
      })
    : placeholder.map((item) => {
        return <ProductCardPlaceholder key={item.id} />;
      });

  return <div className="products--container">{productMap}</div>;
}
