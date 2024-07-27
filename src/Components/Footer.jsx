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
            <li> </li>
            <li></li>
          </ul>
        </div>
        <div className="map_location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4406.515880601209!2d85.3651113762698!3d27.69961317618705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b754daab30b%3A0xd76591f8bb375042!2sBuddy&#39;s%20Cafe!5e1!3m2!1sen!2snp!4v1722096051166!5m2!1sen!2snp"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
