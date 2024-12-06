import Breadcrump from "../Breadcrump/Breadcrump";
import "./categoryComponents.scss";
import FilterSection from "./FilterSection/FilterSection";
import ProductsListComponents from "./ProductsListComponents/ProductsListComponents";

const CategoryComponents = ({category}) => {
  return (
    <div className="category-container">
      <div className="category-container_top">
        <Breadcrump/>
      </div>
      <div className="category-container_bottom">
      <FilterSection/>
      <ProductsListComponents category={category}/>
      </div>
    </div>
  )
}

export default CategoryComponents