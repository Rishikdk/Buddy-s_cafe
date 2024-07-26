import React from "react";
function Menu() {
  return (
    <>
      <div className="Containers">
        <div className="container_nav">
          <nav>
            <ul className="menu_type">
              <li>
                <a href="#"> Menu</a>
              </li>
              <li>
                {" "}
                <a href="#"> Dishes</a>
              </li>
              <li>
                {" "}
                <a href="#"> Salad</a>
              </li>
              <li>
                {" "}
                <a href="#"> Drinks</a>
              </li>
              <li>
                {" "}
                <a href="#"> Special</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Menu;
