import desingsList from "@/data/designs.json";
import "./designsList.scss";
import DesignCard from "../DesignCard/DesignCard";
const DesignsList = ({ printing_category_id }) => {
  const filteredDesign = desingsList.filter((i)=>i.printing_category_id === Number(printing_category_id))

  return (
    <div className="designsList">
      {printing_category_id &&
        filteredDesign.map((thisDesign) => {
         return thisDesign?.designs?.map((design) => (
            <DesignCard design={design} key={design.id} />
          ));
        })}
    </div>
  );
};

export default DesignsList;
