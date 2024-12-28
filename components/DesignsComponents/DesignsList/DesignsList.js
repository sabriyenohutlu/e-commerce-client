import DesignCard from "../DesignCard/DesignCard";
import "./designsList.scss";
import designData from "@/data/designs.json";

const DesignsList = () => {
  return (
    <div className="designsList">
      {designData.map((design, idx) => (
        <DesignCard key={idx} design={design} />
      ))}
    </div>
  );
};

export default DesignsList;
