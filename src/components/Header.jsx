import { Link } from "react-router-dom";

export default function Header() {
  //create array of navbar content
  let navContent = [
    { name: "HOME", route: "/" },
    { name: "MEN'S CLOTHING", route: "/products" },
    { name: "WOMEN'S CLOTHING", route: "/products" },
    { name: "ELECTRONICS", route: "/products" },
    { name: "JEWELLERY", route: "/products" },
  ];

  //map the above array into individual routes
  let navMap = navContent.map((data) => {
    return (
      <Link to={data.route} key={data.name}>
        <p>{data.name}</p>
      </Link>
    );
  });
  return (
    <header>
      <div className="header--head">
        <img alt="logo" className="header--logo"></img>
        <p className="header--title">Shopping</p>
      </div>
      <div className="header--nav">{navMap}</div>
      <div className="header--cart">
        <img alt="cart" className="cart icon" title="Go to cart"></img>
        <div className="header--cart_total"></div>
      </div>
    </header>
  );
}
