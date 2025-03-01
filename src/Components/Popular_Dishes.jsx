import React from "react";

import "./Style/popular_dishes.css";

class Popular extends React.Component {
  render() {
    return (
      <>
        <div className="Container_Popular">
          <img src={this.props.img} className="Dish_img" alt="Dish_img" />
          <div className="Dish_name">
            <h2>{this.props.name}</h2>
            {/* <svg
              className="rectangle"
              width="100%"
              height="218"
              viewBox="0 0 100% 218"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.820979 32.5818C0.909238 47.5 0.821469 32.6083 0.820979 32.5818C0.820488 32.5554 0.819622 32.4237 0.820979 32.5818Z"
                fill="#D9D9D9"
              />
              <path
                d="M270.819 218C270.819 218 269.451 43.5001 269.451 30.5001C269.451 17.5001 251.451 50.9184 229.265 43C207.079 35.0816 174.265 -5.75185e-06 134.265 0C84.6983 7.12751e-06 62.2921 26.1009 39.3192 43C16.4982 59.7874 0.73272 17.6637 0.820979 32.5818C0.870879 38.3973 1.81921 218 1.81921 218H270.819Z"
                fill="#D9D9D9"
              />
            </svg> */}
          </div>
        </div>
      </>
    );
  }
}

export default Popular;
