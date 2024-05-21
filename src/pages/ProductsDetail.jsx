import { useParams } from "react-router-dom";

export default function ProductsDetail() {
  const params = useParams();
  return (
    <>
      <h1>Products Details</h1>
      <p>{params.pid}</p>
    </>
  );
}
