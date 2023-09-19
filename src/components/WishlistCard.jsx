/* eslint-disable react/prop-types */

export default function WishlistCard({ data }) {
  return (
    <div className="wishlist--card">
      <div className="wishlist--img">{data.image}</div>
      <div className="wishlist--head">
        <p className="wishlist--title">{data.title}</p>
        <p className="wishlist--price">{data.price}</p>
        <div className="wishlist--body">
          <p className="wishlist--quantity">1</p>
          <button className="wishlist--remove">Remove from cart</button>
        </div>
      </div>
    </div>
  );
}
