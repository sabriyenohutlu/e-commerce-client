import MainCampaigns from "../MainCampaigns/MainCampaigns";
import MainSlider from "../MainSlider/MainSlider";
import NewArrivals from "../NewArrivals/NewArrivals";
import PopularProducts from "../PopularProducts/PopularProducts";
import HomeCategories from "./HomeCategories/HomeCategories";
import "./homeComponents.scss";

const HomeComponents = () => {
  return (
    <div className="home-components">
      <div className="home-components-top">
        <MainSlider />
        {/* <MainCampaigns /> */}
      </div>
      <HomeCategories/>
      <PopularProducts/>
      <NewArrivals />
    </div>
  );
};

export default HomeComponents;
