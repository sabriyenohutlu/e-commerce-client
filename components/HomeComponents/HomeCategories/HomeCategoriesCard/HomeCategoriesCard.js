import Image from "next/image";
import "./homeCategoriesCard.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";


const HomeCategoriesCard = ({ product }) => {
  return (
    <Link href={product.to} className="homeCategoriesCard">
      <Image height={263} width={350} alt={product.imageAlt} src={product.image} className="homeCategoriesCard-image"/>
    <div className="homeCategoriesCard-bottom">
      <div className="homeCategoriesCard-bottom-categoryArea">
        <div>{product.category}</div>
        <div className="homeCategoriesCard-bottom-categoryArea-icon">
        <div>{product.bottomTitle}</div>
        <FaArrowRightLong />
        </div>
      </div>
    </div>
  </Link>
  )
}

export default HomeCategoriesCard