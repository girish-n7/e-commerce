/* eslint-disable react/prop-types */

import CategoryCard from "./CategoryCard";

export default function Home({ categoryContent }) {
  //map the above array into individual cards
  let categoryMap = categoryContent.map((data) => {
    return (
      <CategoryCard
        key={data.name}
        name={data.name}
        img={data.img}
        category={data.category}
      />
    );
  });

  return (
    <div className="home--container">
      <p className="home--category">SHOP BY CATEGORY:</p>
      <div className="category--card__container">{categoryMap}</div>
    </div>
  );
}
