import DesignsCategoryCard from "../DesignsCategoryCard/DesignsCategoryCard";
import "./designsCategoriesList.scss";
import designData from "@/data/designs.json";
const DesignsCategoriesList = () => {
  return (
    <div className="designsCategoryList">
    {designData?.map((design, idx) => ( //printing example olanlar
      <DesignsCategoryCard key={idx} design={design} />
    ))}
  </div>
  )
}

export default DesignsCategoriesList