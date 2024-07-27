import React from "react";
import Salad1 from "../../assets/img/Salad and special/Salad.jpg";
import { Link } from "react-router-dom";
import "../Style/menu.css";

function Salad() {
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
                <Link to="/" className="item2" id="item">
                  {" "}
                  Dishes
                </Link>
              </li>
              <li>
                <Link to="/salad" className="item3" id="item">
                  {" "}
                  Salad
                </Link>
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
              <img src={Salad1} alt="image 1" />
              <h2>Salad-1</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Salad;
