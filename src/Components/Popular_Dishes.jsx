import React from "react";
import Dish1 from "../assets/img/OIP.jpeg";
import "./Style/popular_dishes.css";

class Popular extends React.Component {
  render() {
    return (
      <>
        <div className="Container_Popular">
          <div className="Dish_img">
            {/* <img src={Dish1} className="Dish_img" alt="Dish_img" /> */}
          </div>

          <div className="Dish_name">
            <p>Dish Name</p>
          </div>
        </div>
      </>
    );
  }
}

export default Popular;
