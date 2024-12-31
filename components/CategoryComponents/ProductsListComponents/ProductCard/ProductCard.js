import Image from "next/image";
import "./productCard.scss";
import FavButton from "@/components/FavButton/FavButton";
import AddBasketButton from "@/components/AddBasketButton/AddBasketButton";

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
        <div className="productCard-bottom_priceArea">
          <span className="productCard-bottom_priceArea-price">
            {product.price} TL
          </span>
          <div className="productCard-bottom_priceArea-basket">
          <AddBasketButton />
          </div>
        </div>
        <FavButton />
      </div>
    </div>
  );
};

export default ProductCard;
