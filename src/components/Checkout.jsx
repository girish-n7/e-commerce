/* eslint-disable react/prop-types */

import { useState } from "react";
import checkout from "../assets/checkout.svg";

export default function Checkout({ cart }) {
  let [showCheckout, setCheckout] = useState(true);

  //total amount
  let totalAmount = 0;

  cart.forEach((obj) => {
    totalAmount += obj.price; //to get the total amount for the items
  });

  //create a map of products to display in checkout
  let productMap = cart.map((item) => {
    return (
      <div className="checkout--card" key={item.id}>
        <p className="checkout--item__title">{item.title}</p>
        <p className="checkout--item__price">${item.price}</p>
        <p className="checkout--item__quantity">Quantity: 1</p>
      </div>
    );
  });

  return showCheckout ? (
    <div className="checkout--container">
      <div className="checkout--head">
        <p className="checkout--total">Total items: {cart.length}</p>
        <p className="checkout--amount">Total amount: ${totalAmount}</p>
      </div>
      {cart.length > 0 && (
        <div className="checkout--body">
          {productMap}
          <button
            className="checkout--buy"
            onClick={() => setCheckout((prevState) => !prevState)}
          >
            <img src={checkout} alt="" className="checkout--img"></img>
            Place order
          </button>
        </div>
      )}
    </div>
  ) : (
    <div className="checkout--container">
      <img src={checkout} alt="" className="confirm--img"></img>
      <p className="checkout--confirm">Your order has been placed </p>
      <p className="checkout--thanks">Thank you for shopping</p>
    </div>
  );
}
