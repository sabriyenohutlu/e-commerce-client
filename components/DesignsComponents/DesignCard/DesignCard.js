import Image from "next/image";
import "./designCard.scss";

const DesignCard = ({ design }) => {
  return (
    <div className="designCard">
      <Image
        className="designCard-image"
        src={design.image}
        width={265}
        height={320}
        alt="design"
      />
      <div className="designCard-bottom">
        <span className="designCard-bottom_title">{design.title}</span>
        <div className="designCard-bottom_buttons">
        <button>Favorilere Ekle</button>
        <button>Tasarımı Seç</button>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
