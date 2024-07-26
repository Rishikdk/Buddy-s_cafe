import React from "react";
import Header from "./Components/header.jsx";
import Desk_pic from "./assets/img/front.jpeg";
import Dish1 from "./assets/img/OIP.jpeg";
import Popular from "./Components/Popular_Dishes.jsx";
import Memories from "./Components/Memories.jsx";
import About_us from "./Components/About_Us.jsx";
import Menu from "./Components/Menu.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="Containers_App">
          <div className="Container_header">
            <img src={Desk_pic} className="Desk_pic" alt="Desk_pic" />
          </div>
          <h1 className="popular_name">Popular Dishes</h1>
          <div className="Popular">
            <Popular img={Dish1} name="pizza" />
            <Popular img={Dish1} name="pizza" />
            <Popular img={Dish1} name="pizza" />
            <Popular img={Dish1} name="pizza" />
            <Popular img={Dish1} name="pizza" />
            <Popular img={Dish1} name="pizza" />
            <Popular img={Dish1} name="pizza" />
            <Popular img={Dish1} name="pizza" />
          </div>

          <div className="memories">
            <h1>Memories</h1>
            <Memories />
          </div>
          <div className="About_us">
            <About_us />
          </div>
          <div className="Menu">
            <Menu />
          </div>
          <div className="Customer_review"></div>
          <div className="footer"></div>
        </div>
      </>
    );
  }
}

export default App;
