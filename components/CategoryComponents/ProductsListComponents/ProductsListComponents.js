import ProductCard from "./ProductCard/ProductCard";
import "./productsListComponents.scss";
import tshirts from "../../../data/tshirts.json";
import cups from "../../../data/cups.json";

const ProductsListComponents = ({category}) => {

  let products = [];
  if (category === 'tisortler') {
    products = tshirts;
  } else if (category === 'kupalar') {
    products = cups;
  } else {
    return <p>Ürün bulunamadı.</p>;
  }


  return (
    <div className="productsList">
      {products.map((product,idx)=> {
       return  <ProductCard product={product} key={idx}/>
      })}
    </div>
  )
}

export default ProductsListComponents