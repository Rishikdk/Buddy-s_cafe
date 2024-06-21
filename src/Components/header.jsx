import React from "react";
import Logo from "../assets/img/Buddys_logo.jpg";
import "../Components/Style/header.css";

class header extends React.Component {
  render() {
    return (
      <>
        <div className="Containers">
          <div className="header">
            <img src={Logo} className="Front_pic" alt="Front_pic" />
            <div className="header_name">
              <h1>Buddy's</h1>
              <p>Cafe</p>
            </div>
          </div>

          <div className="Container_tag">
            <div className="header_menu">
              <ul>
                <li>Home</li>
                <li>Service</li>
                <li>About Us</li>
                <li>Menu</li>
              </ul>
            </div>

            <div className="header_logo"></div>
          </div>
        </div>
      </>
    );
  }
}

export default header;
