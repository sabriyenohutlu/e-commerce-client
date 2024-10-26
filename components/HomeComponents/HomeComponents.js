import MainCampaigns from "../MainCampaigns/MainCampaigns"
import MainSlider from "../MainSlider/MainSlider"
import "./homeComponents.scss";

const HomeComponents = () => {
  return (
    <div className="home-components">
        <MainSlider/>
        <MainCampaigns/>
    </div>
  )
}

export default HomeComponents