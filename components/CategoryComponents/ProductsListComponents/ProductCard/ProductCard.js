import "./productCard.scss";

const ProductCard = ({product}) => {
  return (
    <div className="productCard">
        <div className="productCard-image">İmage</div>
        <div className="productCard-bottom">
            <span>{product.title}</span>
            <span>{product.price}</span>
            <span>{product.description}</span>
            <span>{product.category}</span>
        </div>
    </div>
  )
}

export default ProductCard