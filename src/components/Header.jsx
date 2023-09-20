import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import heart from "../assets/heart.svg";
import cart from "../assets/cart.svg";

export default function Header() {
  let navigate = useNavigate();

  //create array of navbar content
  let navContent = [
    { name: "HOME", route: "/" },
    { name: "MEN'S CLOTHING", route: "/products/men's clothing" },
    { name: "WOMEN'S CLOTHING", route: "/products/women's clothing" },
    { name: "ELECTRONICS", route: "/products/electronics" },
    { name: "JEWELLERY", route: "/products/jewelery" },
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
        <img src={logo} alt="logo" className="header--logo"></img>
        <p className="header--title">Shopping</p>
      </div>
      <div className="header--nav">{navMap}</div>
      <div className="header--cart">
        <img
          src={heart}
          onClick={() => navigate("/wishlist")}
          alt="wishlist"
          className="wishlist icon"
          title="Go to wishlist"
        ></img>
        <img
          src={cart}
          onClick={() => navigate("/cart")}
          alt="cart"
          className="cart icon"
          title="Go to cart"
        ></img>
      </div>
    </header>
  );
}
