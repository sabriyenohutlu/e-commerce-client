import "./categoriesList.scss";
import React from 'react'
import categoriesData from "@/data/categories.json";

const CategoriesList = () => {
 
  return (
    <div className="categoriesComponents">
    <span className="categoriesComponents-title">
      {categoriesData.map((i,idx)=><span key={idx}>{i.title}</span>)}
    </span>
    <div className="categoriesComponents-products">
       {/* {categoriesData[].map((product, idx) => {
        return <ProductCard product={product} key={idx} />;
      })}   */}
    </div>
  </div>
  )
}

export default CategoriesList