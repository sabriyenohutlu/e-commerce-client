"use client";
import ProductCard from "@/components/CategoryComponents/ProductsListComponents/ProductCard/ProductCard";
import { fetchProducts } from "@/data/data";
import { useEffect, useState } from "react";

const ProductDenemePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      async function loadProducts() {
        const data = await fetchProducts();
        setProducts(data);
      }
  
      loadProducts();
    }, []);
   
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {/* {products?.length === 0 ? <h1>Loading...</h1> : products?.map((product,idx) => <ProductCard key={idx} product={product}/>)} */}
     
    </div>
  )
}

export default ProductDenemePage