import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h2>Products</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {products.map((p) => (
          <div key={p.id}>
            <img src={p.thumbnail} width="150" alt=""/>
            <h4>{p.title}</h4>
            <Link to={`/product/${p.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;