import Image from "next/image";
import "./designsCategoryCard.scss";
import Link from "next/link";
const DesignsCategoryCard = ({ design }) => {

  const {headImg, printing_name,id,printing_category_id} = design;
  return (
        <div className="designsCategoryCard">
          <Image
            className="designsCategoryCard-image"
            src={headImg}
            width={265}
            height={320}
            alt="design"
          />
          <div className="designsCategoryCard-bottom">
            <span className="designsCategoryCard-bottom_title">{printing_name}</span>
            <div className="designsCategoryCard-bottom_buttons">
            <Link className="designsCategoryCard-bottom_buttons-link" href={`tasarimlar/${printing_category_id}`}>Bu kategoriyi keşfet</Link>
            </div>
          </div>
        </div>
  )
}

export default DesignsCategoryCard