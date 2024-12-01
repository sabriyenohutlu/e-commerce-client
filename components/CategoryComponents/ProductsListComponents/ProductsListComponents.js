import ProductCard from "./ProductCard/ProductCard";
import "./productsListComponents.scss";

const ProductsListComponents = () => {
  const products = [
    {
      id: 1,
      title: "Ürün 1",
      price: 99.99,
      description: "Ürün 1 açıklaması burada yer alacak.",
     // image: "/images/urun1.jpg",
      category: "Elektronik"
    },
    {
      id: 2,
      title: "Ürün 2",
      price: 129.99,
      description: "Ürün 2 açıklaması burada yer alacak.",
     // image: "/images/urun2.jpg",
      category: "Moda"
    },
    {
      id: 3,
      title: "Ürün 3",
      price: 199.99,
      description: "Ürün 3 açıklaması burada yer alacak.",
     // image: "/images/urun3.jpg",
      category: "Ev Eşyaları"
    },
    {
      id: 4,
      title: "Ürün 4",
      price: 249.99,
      description: "Ürün 4 açıklaması burada yer alacak.",
      //image: "/images/urun4.jpg",
      category: "Kozmetik"
    }
  ]
  return (
    <div className="productsList">
      {products.map((product,idx)=> {
       return  <ProductCard product={product} key={idx}/>
      })}
    </div>
  )
}

export default ProductsListComponents