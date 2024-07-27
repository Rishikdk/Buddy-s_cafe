import React from "react";
import Drink1 from "../../assets/img/Drink/6.jpg";
import Drink2 from "../../assets/img/Drink/7.jpg";
import Drink3 from "../../assets/img/Drink/8.jpg";
import Drink4 from "../../assets/img/Drink/9.jpg";
import { Link } from "react-router-dom";
import "../Style/menu.css";

function Drink() {
  return (
    <>
      <div className="Containers_menu">
        <div className="container_nav">
          <nav>
            <ul className="menu_type">
              <li className="item1" id="item1">
                <Link to="/">Menu</Link>
              </li>
              <li>
                <Link to="/home" className="item2" id="item">
                  {" "}
                  Dishes
                </Link>
              </li>
              <li>
                <a href="#" className="item3" id="item">
                  {" "}
                  Salad
                </a>
              </li>
              <li>
                <Link to="/Drink" className="item4" id="item">
                  Drinks
                </Link>
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

        <div className="container_drinks" id="drink">
          <div className="row_menu1">
            <div className="menu_style">
              <img src={Drink1} alt="image 1" />
              <h2>Dishes-1</h2>
            </div>
            <div className="menu_style">
              <img src={Drink2} alt="image 2" />
              <h2>Dishes-2</h2>
            </div>
            <div className="menu_style">
              <img src={Drink3} alt="image 3" />
              <h2>Dishes-3</h2>
            </div>
          </div>
          <div className="row_menu2">
            <div className="menu_style">
              <img src={Drink4} alt="image 4" />
              <h2>Dishes-4</h2>
            </div>
            {/* <div className="menu_style">
    <img src={Menu5} alt="image 5" />
    <h2>Dishes-5</h2>
  </div>
  <div className="menu_style">
    <img src={Menu5} alt="image 5" />
    <h2>Dishes-5</h2>
  </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Drink;
