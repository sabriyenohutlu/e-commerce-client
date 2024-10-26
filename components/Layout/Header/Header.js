import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <span>LOGO</span>
        <div className="header-top__search">
          <input
            type="text"
            className="header-top__search"
            placeholder="What are you looking for?"
          />
          <button type="submit" className="header-top__search-button">
            <i className="header-top__search-button-icon"></i>
          </button>
        </div>
        <div className="header-top__customerInfo">
        <span>Hesabım</span>
        <span>Favorilerim</span>
        <span>Sepetim</span>
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
