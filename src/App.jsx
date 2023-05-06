import "./App.css"
import ProductCard from "./components/productcard";
const App = () => {
  return(
    <>
    <ProductCard  url="https://placekitten.com/800/800" name="kittens" unitprice="99" category="Meat" />
    <ProductCard  url="https://placekitten.com/600/800" name="kittens" unitprice="20" category="Meat" />
    <ProductCard  url="https://placekitten.com/800/600" name="kittens" unitprice="20" category="Meat"/>
    <ProductCard  url="https://placekitten.com/600/600" name="kittens" unitprice="20" category="Meat"/>
    <ProductCard  url="https://placekitten.com/800/800" name="kittens" unitprice="20" category="Meat"/>
    </>

     
  );
};

export default App;