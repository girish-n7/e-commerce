//card in products list
function ProductCardPlaceholder() {
  return (
    <div className="placeholder--card shimmer">
      <div className="placeholder--card__img"></div>
      <div className="placeholder--card__text"></div>
      <div className="placeholder--card__text short"></div>
    </div>
  );
}

//individual product page
function ProductPlaceholder() {
  return (
    <div className="product--container shimmer">
      <div className="placeholder--product__img"></div>
      <div className="product--body">
        <div className="placeholder--product__title"></div>
        <div className="placeholder--product__rating"></div>
        <div className="placeholder--product__desc"></div>
        <div className="placeholder--product__rating"></div>
      </div>
    </div>
  );
}

export { ProductCardPlaceholder, ProductPlaceholder };
