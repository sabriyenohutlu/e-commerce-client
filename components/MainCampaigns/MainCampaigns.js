import "./mainCampaigns.scss";
import pexelSale from "../../public/images/pexels-sale.jpg";
import Image from "next/image";
const MainCampaigns = () => {
  return (
    <div className="mainCampaigns">
      <Image alt="sale" src={pexelSale}/>
    </div>
  )
}

export default MainCampaigns