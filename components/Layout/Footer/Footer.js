import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <span>Hakkımızda</span>
        <span>Gizlilik Politikaları</span>
        <span>Kişisel Verilerin Korunması</span>
        <span>Kullanma Koşulları</span>
        <span>İletişim</span>
      </div>
      <div className="footer-center">
        <span>Ödeme</span>
        <span>Teslimat ve İade</span>
        <span>Site Kullanımı</span>
        <span>Üyelik Bilgileri</span>
      </div>
      <div className="footer-right">
        <span>Sosyal medya iconu</span>
        <span>Sosyal medya iconu</span>
        <span>Sosyal medya iconu</span>
      </div>
    </div>
  )
}

export default Footer