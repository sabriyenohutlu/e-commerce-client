import "./categoryComponents.scss";
import FilterSection from "./FilterSection/FilterSection";
import ProductsListComponents from "./ProductsListComponents/ProductsListComponents";

const CategoryComponents = () => {
  return (
    <div className="category-container">
      <FilterSection/>
      <ProductsListComponents/>
    </div>
  )
}

export default CategoryComponents