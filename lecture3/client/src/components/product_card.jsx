import styles from "./ProductCard.module.css";



function ProductCard({name="unknown" , price="0" ,inStock=false}) {
    // const {name ,price,inStock}=props
    // if(!name){
    //   return(<p>Name field is not present</p>);
      
    // }
    // if(!price){
    //   return(<p>Price field is not present</p>);
      
    // }
  return (
    
   <div className={styles.card}>
      <h2>{name}</h2>
      <p>Price: ₹{price}</p>
      <p>{inStock ? "Available" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;
