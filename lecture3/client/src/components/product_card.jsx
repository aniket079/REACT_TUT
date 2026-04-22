import styles from "./ProductCard.module.css";
// import "./product.css";



function ProductCard({name="unknown" , price="0" ,inStock=false}) {
  return (
   <div className={styles.card}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>{inStock ? "Available" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;
