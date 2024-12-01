import "./homeCategories.scss";
import HomeCategoriesCard from "./HomeCategoriesCard/HomeCategoriesCard";

const HomeCategories = () => {
    const homeCategoriesData  = [
        {
            id: 1,
            image:"",
            imageAlt:"",
            category: "Sweatshirt",
            bottomTitle: "Şimdi Keşfet",
          },
          {
            id: 2,
            image:"",
            imageAlt:"",
            category: "Telefon Kılıfı",
            bottomTitle: "Şimdi Keşfet",
          },
          {
            id: 3,
            image:"",
            imageAlt:"",
            category: "Tişört",
            bottomTitle: "Şimdi Keşfet",
          },
    ]

  return (
    <div className="homeCategories">
    <span className="homeCategories-title">Özel Tasarım Tişörtler</span>
    <div className="homeCategories-products">
      {homeCategoriesData.map((product, idx) => {
        return <HomeCategoriesCard product={product} key={idx} />;
      })}
    </div>
  </div>
  )
}

export default HomeCategories