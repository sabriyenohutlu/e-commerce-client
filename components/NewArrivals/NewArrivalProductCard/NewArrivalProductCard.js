import Image from "next/image";
import "./newArrivalProductCard.scss";

const NewArrivalProductCard = ({ product }) => {
  return (
    <div className="newArrivalProductCard">
      <Image src={product.image} alt={product.imageAlt} className="newArrivalProductCard_image"/>
      <div className="newArrivalProductCard-bottom">
        <div className="newArrivalProductCard-bottom-categoryArea">
          <div>{product.category}</div>
          <div>{product.bottomTitle}</div>
        </div>
        <div className="newArrivalProductCard-bottom-icon">
          <span>icon</span>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalProductCard;
