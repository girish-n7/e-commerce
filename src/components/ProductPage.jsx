import { useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "./CallBackend";

export default function ProductPage() {
  let { id } = useParams();

  let [data, setData] = useState();

  getProductById(id).then((response) => setData(response.json()));
  return <div className="product--container">{data}</div>;
}
