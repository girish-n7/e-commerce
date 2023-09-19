/* eslint-disable react/prop-types */
import CartCard from "./CartCard";

export default function Cart({ cart, updateCart, clearCart }) {
  //map the cart array into cards

  let cartMap = cart.map((item) => {
    return <CartCard key={item.id} data={item} />;
  });

  return (
    cart && (
      <div className="cart--container">
        <div className="cart--buttons">
          <button className="cart--clear" onClick={() => clearCart()}>
            Clear Cart
          </button>
          <button className="cart--buy">Proceed to buy</button>
        </div>
        <div className="cart--card__container">{cartMap}</div>
      </div>
    )
  );
}
