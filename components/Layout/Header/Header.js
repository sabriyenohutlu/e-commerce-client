import Link from "next/link";
import "./header.scss";
import { FaTshirt } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { GrFavorite } from "react-icons/gr";
import { GrBasket } from "react-icons/gr";
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <Link className="header-top__logo" href={"/"}>
          <FaTshirt size={35} color="#E6C744" />
        </Link>
        <div className="header-top__search">
          <input
            type="text"
            className="header-top__search-input"
            placeholder="Aradığınız ürünü yazın..."
          />
          <button type="submit" className="header-top__search-button">
            <i className="header-top__search-button-icon"></i>
          </button>
        </div>
        <div className="header-top__customerInfo">
          <Link className="header-top__customerInfo-profile" href={"/hesabim"}>
            <TiUser />
            <span>Hesabım</span>
          </Link>

          <Link
            href={"/favorilerim"}
            className="header-top__customerInfo-favorite"
          >
            <GrFavorite />
            <span>Favorilerim</span>
          </Link>

          <Link href={"/sepet"} className="header-top__customerInfo-basket">
            <GrBasket />
            <span>Sepetim</span>
          </Link>
        </div>
      </div>
      <div className="header-bottom">
        <span>Kategori1</span>
        <span>Kategori2</span>
        <span>Kategori3</span>
        <span>Kategori4</span>
        <span>Kategori5</span>
        <span>Kategori6</span>
      </div>
    </div>
  );
};

export default Header;
