import Link from "next/link";
import "./header.scss";
import { FaTshirt } from "react-icons/fa";
import { TiUser } from "react-icons/ti";
import { GrFavorite } from "react-icons/gr";
import { GrBasket } from "react-icons/gr";
const Header = () => {
  const categories = [
    { id: 1, title: "Yeni Gelenler",href:"/yeni-gelenler" },
    { id: 2, title: "Tişörtler" ,href:"/tisörtler"},
    { id: 3, title: "Sweatshirt",href:"/sweatshirt" },
    { id: 4, title: "Kupalar",href:"/kupalar" },
    { id: 5, title: "Tasarımlar",href:"/tasarımlar" },
  ];

  return (
    <div className="header">
      <div className="header-top">
        <Link className="header-top__logo" href={"/"}>
          <FaTshirt size={34} color="#E6C744" />
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
            <TiUser size={18} />
            <span className="header-top__customerInfo-profile-title ">
              Hesabım
            </span>
          </Link>

          <Link
            href={"/favorilerim"}
            className="header-top__customerInfo-favorite"
          >
            <GrFavorite size={18} />
            <span>Favorilerim</span>
          </Link>

          <Link href={"/sepet"} className="header-top__customerInfo-basket">
            <GrBasket size={18} />
            <span>Sepetim</span>
          </Link>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom_categories">
          {categories.map((item) => {
            return <Link href={item.href} key={item.id}>{item.title}</Link>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
