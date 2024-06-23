import React from "react";

import "./Style/popular_dishes.css";

class Popular extends React.Component {
  render() {
    return (
      <>
        <div className="Container_Popular">
          <img src={this.props.img} className="Dish_img" alt="Dish_img" />
          <div className="Dish_name">
            <h1>{this.props.name}</h1>
          </div>
        </div>
      </>
    );
  }
}

export default Popular;
