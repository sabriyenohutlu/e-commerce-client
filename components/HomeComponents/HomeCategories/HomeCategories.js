import "./homeCategories.scss";
import HomeCategoriesCard from "./HomeCategoriesCard/HomeCategoriesCard";
import kupahome from "../../../public/assets/cups/kupa-home.jpg";
import homeSweat from "../../../public/assets/sweat/home-sweat.jpg";
import tshirtHome from "../../../public/assets/tshirts/tshirt-home.jpg";
const HomeCategories = () => {
    const homeCategoriesData  = [
        {
            id: 1,
            image:homeSweat,
            to:"/sweatshirt",
            imageAlt:"sweat",
            category: "Sweatshirt",
            bottomTitle: "Şimdi Keşfet",
          },
          {
            id: 2,
            image:kupahome,
            to:"/kupa",
            imageAlt:"kupa",
            category: "Kupa",
            bottomTitle: "Şimdi Keşfet",
          },
          {
            id: 3,
            image:tshirtHome,
            to:"/tshirt",
            imageAlt:"tişört",
            category: "Tişört",
            bottomTitle: "Şimdi Keşfet",
          },
    ]

  return (
    <div className="homeCategories">
    <span className="homeCategories-title"></span>
    <div className="homeCategories-products">
      {homeCategoriesData.map((product, idx) => {
        return <HomeCategoriesCard product={product} key={idx} />;
      })}
    </div>
  </div>
  )
}

export default HomeCategories