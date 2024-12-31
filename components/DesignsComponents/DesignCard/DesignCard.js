import Image from "next/image";
import "./designCard.scss";
import { GrFavorite } from "react-icons/gr";
import FavButton from "@/components/FavButton/FavButton";

const DesignCard = ({ design }) => {
  const { image_path, example_printing_name } = design;
  return (
    <div className="designCard">
      <Image
        className="designCard-image"
        src={image_path}
        width={265}
        height={320}
        alt="design"
      />
      <div className="designCard-bottom">
        <span className="designCard-bottom_title">{example_printing_name}</span>
        <div className="designCard-bottom_buttons">
          <FavButton />
          <button className="select-button">Tasarımı Seç</button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
