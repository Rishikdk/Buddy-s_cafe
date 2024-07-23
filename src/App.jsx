import React from "react";
import Header from "./Components/header.jsx";
import Desk_pic from "./assets/img/front.jpeg";
import Dish1 from "./assets/img/OIP.jpeg";
import Popular from "./Components/Popular_Dishes.jsx";
import Memories from "./Components/Memories.jsx";
import About_us from "./Components/About_Us.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="Containers_App">
          <div className="Container_header">
            <img src={Desk_pic} className="Desk_pic" alt="Desk_pic" />
          </div>
          <h1>Popular Dishes</h1>
          <div className="Popular">
            <Popular img={Dish1} name="momo1" />
            <Popular img={Dish1} name="momo2" />
            <Popular img={Dish1} name="momo3" />
            <Popular img={Dish1} name="momo4" />
            <Popular img={Dish1} name="momo5" />
          </div>

          <div className="memories">
            <h2>Memories</h2>
            <Memories />
          </div>
          <div className="About_us">
            <About_us />
          </div>
          <div className="Menu"></div>
          <div className="Customer_review"></div>
          <div className="footer"></div>
        </div>
      </>
    );
  }
}

export default App;
