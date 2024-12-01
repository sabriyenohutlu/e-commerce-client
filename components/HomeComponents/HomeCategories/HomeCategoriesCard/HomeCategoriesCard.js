import "./homeCategoriesCard.scss";

const HomeCategoriesCard = ({ product }) => {
  return (
    <div className="homeCategoriesCard">
    <div>{product.image}</div>
    <div className="homeCategoriesCard-bottom">
      <div className="homeCategoriesCard-bottom-categoryArea">
        <div>{product.category}</div>
        <div>{product.bottomTitle}</div>
      </div>
      <div className="homeCategoriesCard-bottom-icon">
        <span>icon</span>
      </div>
    </div>
  </div>
  )
}

export default HomeCategoriesCard