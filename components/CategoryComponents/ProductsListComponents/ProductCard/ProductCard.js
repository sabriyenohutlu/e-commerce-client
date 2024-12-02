import Image from "next/image";
import "./productCard.scss";

const ProductCard = ({product}) => {
  return (
    <div className="productCard">
        <div className="productCard-image">
          <Image src={product.image} width={229} height={350} alt="product"/>
        </div>
        <div className="productCard-bottom">
            <span>{product.title}</span>
            <span>{product.price}</span>
            <span>{product.description}</span>
            <span>{product.category}</span>
        </div>
    </div>
  )
}

export default ProductCard