import React from "react";
import Menu1 from "../assets/img/menu/1.png";
import Menu2 from "../assets/img/menu/2.png";
import Menu3 from "../assets/img/menu/3.png";
import Menu4 from "../assets/img/menu/4.png";
import Menu5 from "../assets/img/menu/5.png";
import "./Style/menu.css";
function Menu() {
  return (
    <>
      <div className="Containers_menu">
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
          <div className="row_menu1">
            <div className="menu_style">
              <img src={Menu1} alt="image 1" />
              <h2>Dishes-1</h2>
            </div>
            <div className="menu_style">
              <img src={Menu2} alt="image 2" />
              <h2>Dishes-2</h2>
            </div>
            <div className="menu_style">
              <img src={Menu3} alt="image 3" />
              <h2>Dishes-3</h2>
            </div>
          </div>
          <div className="row_menu2">
            <div className="menu_style">
              <img src={Menu4} alt="image 4" />
              <h2>Dishes-4</h2>
            </div>
            <div className="menu_style">
              <img src={Menu5} alt="image 5" />
              <h2>Dishes-5</h2>
            </div>
            <div className="menu_style">
              <img src={Menu5} alt="image 5" />
              <h2>Dishes-5</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
