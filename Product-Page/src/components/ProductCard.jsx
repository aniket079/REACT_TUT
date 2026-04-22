import { useEffect } from "react";

function ProductCard({ product }) {

  // console.log("ProductCard Rendered", product.id);

  useEffect(() => {
    console.log("ProductCard Mounted:", product.id);

    return () => {
      console.log("ProductCard Unmounted:", product.id);
    };
  }, []);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{product.title}</h3>
      <p>Price: ₹{product.price}</p>
      <img style={{height:"50px"}} src={product.thumbnail} alt="" /></div>
  );
}

export default ProductCard;






//  Case 1: No dependency array
// useEffect(() => {
//   console.log("Runs on every render");
// });

// Runs every time component re-renders

//  Case 2: Empty dependency array []
// useEffect(() => {
//   console.log("Runs only once");
// }, []);

//  Runs only once (on mount)
//  Like componentDidMount in class components

//  Case 3: With dependencies
// useEffect(() => {
//   console.log("Runs when count changes");
// }, [count]);

//  Runs only when count changes
