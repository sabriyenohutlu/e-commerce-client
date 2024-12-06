import { MdKeyboardArrowRight } from "react-icons/md";
import "./breadcrump.scss";
const Breadcrump = () => {
  return (
    <div className="breadcrump">
      <div className="breadcrump-items">
     <span>Anasayfa</span>
     <MdKeyboardArrowRight className="breadcrump-icon"/>
     <span>Kategori</span>
     </div>
    </div>
  )
}

export default Breadcrump