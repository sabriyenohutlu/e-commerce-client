import Image from "next/image";
import "./mainSlider.scss";
import anaSayfaTisort from "../../public/images/ana-sayfa-tisort.png";

const MainSlider = () => {
  return (
    <div className="mainSlider">
      <Image src={anaSayfaTisort} className="mainSlider-image"/>
    </div>
  )
}

export default MainSlider