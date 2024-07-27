import "./Style/footer.css";
import Footer1 from "../assets/img/footer.png";

function Footer() {
  return (
    <>
      <footer className="Container_footer">
        <div className="footer_logo">
          <div className="logo">
            <img src={Footer1} alt="footer_img" />
          </div>
        </div>

        <div className="details">
          <ul>
            <li>Contact</li>
            <li>Location: </li>
            <li>Hatti Dara,Kharey,Kathmandu</li>
            <li>Tel:9865993612</li>
            <li>info@buddys.com</li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="Quick_link">
          <ul>
            <li>Quick Link</li>
            <li>Home </li>
            <li>About Us</li>
            <li>Menu</li>
            <li>Server</li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
