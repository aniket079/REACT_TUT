import ProductCard from "./components/product_card";
import ProductList from  "./components/product_list"

function App() {
  return <ProductCard
          name="Samsung"
          price="2000"
          inStock={true}/>;
}

// function App() {
//   return <ProductList/>;
// }

export default App;
