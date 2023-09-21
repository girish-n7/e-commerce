/* eslint-disable react/prop-types */

export default function Checkout({ cart }) {
  return <div className="checkout--container">Checkout : {cart.length}</div>;
}
