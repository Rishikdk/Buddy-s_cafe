import React from "react";
import Menu1 from "../assets/img/menu/1.png";
import "./Style/menu.css";
function Menu() {
  return (
    <>
      <div className="Containers">
        <div className="container_nav">
          <nav>
            <ul className="menu_type">
              <li className="item1" id="item1">
                <a href="#"> Menu</a>
              </li>
              <li>
                <a href="#" className="item2" id="item">
                  {" "}
                  Dishes
                </a>
              </li>
              <li>
                <a href="#" className="item3" id="item">
                  {" "}
                  Salad
                </a>
              </li>
              <li>
                <a href="#" className="item4" id="item">
                  {" "}
                  Drinks
                </a>
              </li>
              <li>
                <a href="#" className="item5" id="item">
                  {" "}
                  Special
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="container_menu">
          <div className="menu_img">
            <img src={Menu1} alt="" />
            <img src="" alt="" />

            <img src="" alt="" />

            <img src="" alt="" />

            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
