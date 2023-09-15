/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Footer({ categoryContent }) {
  //map the category content into individual clickable <p>
  let categoryMap = categoryContent.map((item) => {
    return (
      <Link to={`/products/${item.category}`} key={item.name}>
        <p className="footer--category" key={item.name}>
          {item.name}
        </p>
      </Link>
    );
  });

  return (
    <footer>
      <div className="footer--left">
        <p style={{ fontSize: "3rem" }}>SHOP</p>
        <div className="socials--container">
          <p>Gmail</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className="footer--right">
        <div className="footer--categories__container">
          <p className="footer--title">CATEGORIES</p>
          {categoryMap}
        </div>
        <div className="footer--help__container">
          <p className="footer--title">NEED HELP?</p>

          <p className="footer--help">FAQ</p>
          <p className="footer--help">TERMS OF USE</p>
          <p className="footer--help">CUSTOMER CARE</p>
          <p className="footer--help">PRIVACY POLICY</p>
        </div>
        <div className="footer--product__help">
          <p className="footer--title">PRODUCT QUERIES</p>
          <p className="footer--help">TRACK ORDER</p>
          <p className="footer--help">SHIPPING</p>
          <p className="footer--help">RETURN POLICY</p>
          <p className="footer--help">ORDER CANCELLATION</p>
        </div>
      </div>
    </footer>
  );
}
