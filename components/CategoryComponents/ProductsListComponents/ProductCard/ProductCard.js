import Image from "next/image";
import "./productCard.scss";

const ProductCard = ({product}) => {
  return (
    <div className="productCard">
        <div className="productCard-image">
          <Image src={product.image} width={265} height={320} alt="product"/>
        </div>
        <div className="productCard-bottom">
            <span className="productCard-bottom_title">{product.title}</span>
            <span className="productCard-bottom_price">{product.price} <span className="productCard-bottom_currency">TL</span></span>
        </div>
    </div>
  )
}

export default ProductCard