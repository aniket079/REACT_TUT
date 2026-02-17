import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("ProductList Rendered");

  useEffect(() => {
    console.log("ProductList Mounted");

    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        console.log("API Success");
        setProducts(data.products);
        setLoading(false);
      })
      .catch(error => {
        console.log("API Error:", error);
        setLoading(false);
      });

  }, []);

  useEffect(() => {
  console.log("Mounted");

  return () => {
    console.log("Cleanup before unmount");
    setProducts([]);
  };
  }, []);


  return (
    <div>
      <h1>Products</h1>

      {loading && <p>Loading...</p>}

      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
