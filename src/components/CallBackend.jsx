function allProducts() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch("http://localhost:3000/", requestOptions);
}

function getProductsByCategory(category) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`http://localhost:3000/${category}`, requestOptions);
}

function getProductById(id) {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(`http://localhost:3000/${id}`, requestOptions);
}

export { allProducts, getProductById, getProductsByCategory };
