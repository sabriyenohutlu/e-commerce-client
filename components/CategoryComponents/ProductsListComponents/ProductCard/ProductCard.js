import Image from "next/image";
import "./productCard.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <Image
        className="productCard-image"
        src={product.image}
        width={265}
        height={320}
        alt="product"
      />
      <div className="productCard-bottom">
        <span className="productCard-bottom_title">{product.title}</span>
        <span className="productCard-bottom_price">
          {product.price}{" "}
          <span className="productCard-bottom_currency">TL</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
