import NewArrivalProductCard from "./NewArrivalProductCard/NewArrivalProductCard";
import newArrivalsFirst from "../../public/assets/home/first.png"
import newArrivalsSec from "../../public/assets/home/sec.png";
import newArrivalsThird from "../../public/assets/home/third.png";
import "./newArrivals.scss";
const NewArrivals = () => {
  const newArrivalsProducts = [
    {
      id: 1,
      image:newArrivalsFirst,
      imageAlt:"",
      category: "Sweatshirt",
      bottomTitle: "Şimdi Keşfet",
    },
    {
      id: 2,
      image:newArrivalsSec,
      imageAlt:"",
      category: "Telefon Kılıfı",
      bottomTitle: "Şimdi Keşfet",
    },
    {
      id: 3,
      image:newArrivalsThird,
      imageAlt:"",
      category: "Tişört",
      bottomTitle: "Şimdi Keşfet",
    },
    {
      id: 4,
      image:newArrivalsThird,
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
