import Image from "./image";
import Product from "./product";
const ProductCard = ({url , unitprice , name , category}) => {
    return(
        <div className="product-page">
            <Image url={url}/>
            <Product unitprice={unitprice} name={name} category={category}/>
        </div>
    );
};
export default ProductCard;