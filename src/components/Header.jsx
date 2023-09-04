import { Link } from "react-router-dom";

export default function Header() {
  //create array of navbar content
  let navContent = [
    { name: "Home", Route: "/" },
    { name: "Men's Clothing", Route: "/" },
    { name: "Women's Clothing", Route: "/" },
    { name: "Electronics", Route: "/" },
    { name: "Jewelery", Route: "/" },
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
    <div className="header--container">
      <div className="header--head">
        <img alt="logo" className="header--logo"></img>
        <p className="header--title">Shopping</p>
      </div>
      <div className="header--nav">{navMap}</div>
      <div className="header--cart">
        <img alt="cart" className="cart icon"></img>
        <div className="header--cart_total"></div>
      </div>
    </div>
  );
}
