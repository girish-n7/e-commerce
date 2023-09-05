import CategoryCard from "./CategoryCard";

export default function Home() {
  //create an array containing card contents
  let categoryCard = [
    { name: "MEN'S CLOTHING", img: "", route: "/products" },
    { name: "WOMEN'S CLOTHING", img: "", route: "/products" },
    { name: "ELECTRONICS", img: "", route: "/products" },
    { name: "JEWELERY", img: "", route: "/products" },
  ];

  //map the above array into individual cards
  let categoryMap = categoryCard.map((data) => {
    return (
      <CategoryCard
        key={data.name}
        name={data.name}
        img={data.img}
        route={data.route}
      />
    );
  });

  return (
    <div className="home--container">
      <p className="home--category">Shop by category:</p>
      <div className="category--card__container">{categoryMap}</div>
    </div>
  );
}
