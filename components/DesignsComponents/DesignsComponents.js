import DesignsList from "./DesignsList/DesignsList"
import DesignsCategoriesList from "./DesingsCategoriesList/DesignsCategoriesList";
import "./designsComponents.scss";
const DesignsComponents = () => {
  return (
    <div className="designsComponents">
    {/* <DesignsList/> */}
    <DesignsCategoriesList/>
    </div>
  )
}

export default DesignsComponents