import "./categoryComponents.scss";
import FilterSection from "./FilterSection/FilterSection";
import ProductsListComponents from "./ProductsListComponents/ProductsListComponents";

const CategoryComponents = ({category}) => {
  return (
    <div className="category-container">
      <FilterSection/>
      <ProductsListComponents category={category}/>
    </div>
  )
}

export default CategoryComponents