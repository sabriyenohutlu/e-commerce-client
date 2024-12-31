import { GrFavorite } from "react-icons/gr"
import "./favButton.scss";
const FavButton = () => {
  return (
      <button className="fav-button">  <GrFavorite size={18} className="icon"/></button>
  )
}

export default FavButton