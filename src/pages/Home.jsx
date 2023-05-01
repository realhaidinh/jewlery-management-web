import AppHeader from "../components/AppHeader";
import { getAllProduct } from "../api/product";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   getAllProduct().then((result) => {
  //     setProducts(result);
  //   });
  // }, []);

  return (
    <>
      <AppHeader>HOMEPAGE (xem source để xem minh họa call api)</AppHeader>
      {products.map((product, index) => <div key={index}>{product.MaSP} la {product.TenSP}</div>)}
    </>
  );
};

export default Home;
