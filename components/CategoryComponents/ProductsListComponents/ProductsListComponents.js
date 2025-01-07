import ProductCard from "./ProductCard/ProductCard";
import "./productsListComponents.scss";
import tshirts from "../../../data/tshirts.json";
import cups from "../../../data/cups.json";
import sweatshirts from "../../../data/sweatshirts.json";
import onesies from "../../../data/onesies.json";
import designs from "../../../data/designs.json";

const ProductsListComponents = ({category}) => {

  const productsMap = {
    tisortler: tshirts,
    kupalar: cups,
    sweatshirt:sweatshirts,
    zibin:onesies,
    tasarimlar:designs
  };
  
  return (
    <div className="productsList">
      {productsMap[category]?.length ? (
        productsMap[category]?.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))
      ) : (
        <p className="productsList">Ürün bulunamadı.</p>
      )}
    </div>
  );
}

export default ProductsListComponents