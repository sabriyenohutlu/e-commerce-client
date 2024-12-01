import NewArrivalProductCard from "./NewArrivalProductCard/NewArrivalProductCard";
import "./newArrivals.scss";
const NewArrivals = () => {
  const newArrivalsProducts = [
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
  ];
  return (
    <div className="newArrivals">
      <span className="newArrivals-title">YENİ GELENLER</span>
      <div className="newArrivals-products">
        {newArrivalsProducts.map((product, idx) => {
          return <NewArrivalProductCard product={product} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default NewArrivals;
