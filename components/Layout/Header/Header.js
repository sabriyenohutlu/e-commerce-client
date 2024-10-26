import "./header.scss"
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <span>Logo</span>
        <span>Search bar</span>
        <span>Hesabım</span>
        <span>Favorilerim</span>
        <span>Sepetim</span>
      </div>
      <div className="header-bottom">
        <span>Kategoriler</span>
      </div>
    </div>
  )
}

export default Header