function allProducts() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("http://localhost:3000/all", requestOptions);
}

function getProductsByCategory(category) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`http://localhost:3000/category/${category}`, requestOptions);
}

function getProductById(id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`http://localhost:3000/products/${id}`, requestOptions);
}

export { allProducts, getProductById, getProductsByCategory };
